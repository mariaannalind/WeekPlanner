import { Component, OnInit, Input, ViewChild } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  CdkDragExit,
} from '@angular/cdk/drag-drop';
import { ITask } from './task';
import { TasksService } from './../shared/tasks.service';

@Component({
  selector: 'app-repeated-tasks',
  templateUrl: './repeated-tasks.component.html',
  styleUrls: ['./repeated-tasks.component.css'],
})
export class RepeatedTasksComponent implements OnInit {
  @Input() event: CdkDragDrop<string[]>;
  newRepetitions: number;
  newRepeatedTaskName: string;

  constructor(private taskService: TasksService) {}

  get repeatedTasks(): ITask[] {
    return this.taskService.repeatedTasks;
  }

  drop(event: CdkDragDrop<string[]>): void {
    moveItemInArray(
      this.taskService.repeatedTasks,
      event.previousIndex,
      event.currentIndex
    );
  }

  taskMoved(event: CdkDragExit<string[]>): void {
    const repeatedTaskId = +event.item.element.nativeElement
      .getElementsByClassName('repeated-name')[0]
      .getAttribute('id');

    const repeatedTask = this.taskService.repeatedTasks.find(
      (task) => task.id === repeatedTaskId
    );

    if (repeatedTask.repetitions > 0) {
      repeatedTask.repetitions -= 1;
      if (repeatedTask.repetitions === 0) repeatedTask.disabled = true;
    } else {
      repeatedTask.disabled = true;
    }
  }

  addNewRepeatedTask(): void {
    const newId = this.taskService.repeatedTasks.length + 1;
    const newRepeatedTask = {
      id: newId,
      disabled: false,
      repetitions: this.newRepetitions,
      name: this.newRepeatedTaskName,
    };

    this.taskService.repeatedTasks.push(newRepeatedTask);
    this.newRepetitions = null;
    this.newRepeatedTaskName = '';
  }

  ngOnInit(): void {}
}
