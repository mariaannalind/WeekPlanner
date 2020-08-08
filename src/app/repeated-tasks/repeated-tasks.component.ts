import { Component, OnInit, Input } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  CdkDropList,
  CdkDragExit,
} from '@angular/cdk/drag-drop';
import { IRepeatedTask } from './repeated-task';
import { RepeatedTasksService } from './repeated-tasks.service';

@Component({
  selector: 'app-repeated-tasks',
  templateUrl: './repeated-tasks.component.html',
  styleUrls: ['./repeated-tasks.component.css'],
})
export class RepeatedTasksComponent implements OnInit {
  @Input() event: CdkDragDrop<string[]>;
  repeatedTasks: IRepeatedTask[];

  constructor(private repeatedTasksService: RepeatedTasksService) {}

  drop(event: CdkDragDrop<string[]>): void {
    moveItemInArray(
      this.repeatedTasks,
      event.previousIndex,
      event.currentIndex
    );
  }

  test(event: CdkDragExit<string[]>): void {
    const repeatedTaskId = +event.item.element.nativeElement
      .getElementsByClassName('repeated-name')[0]
      .getAttribute('id');

    const repeatedTask = this.repeatedTasks.find(
      (task) => task.id === repeatedTaskId
    );

    if (repeatedTask.repetitions > 0) {
      repeatedTask.repetitions -= 1;
      if (repeatedTask.repetitions === 0) repeatedTask.disabled = true;
    } else {
      repeatedTask.disabled = true;
    }
  }

  ngOnInit(): void {
    this.repeatedTasks = this.repeatedTasksService.getRepeatedTasksList();
  }
}
