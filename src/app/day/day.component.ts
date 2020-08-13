import { Component, OnInit, Input } from '@angular/core';
import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { TasksService } from './../shared/tasks.service';
import { ITask } from './../repeated-tasks/task';

@Component({
  selector: 'app-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.css'],
})
export class DayComponent implements OnInit {
  tasks: ITask[] = [];
  newTaskName: string = '';
  newTask: ITask;
  @Input() dayName: string;
  @Input() event: CdkDragDrop<string[]>;

  constructor(private taskService: TasksService) {}

  onAddTaskMethod(): void {
    if (this.newTaskName !== '') {
      this.newTask = {
        name: this.newTaskName,
        id: null,
        repetitions: null,
        disabled: false,
      };
      this.tasks.push(this.newTask);
      this.newTaskName = '';
    }
  }

  onRemoveTaskMethod(taskToRemove): void {
    this.tasks = this.tasks.filter((task) => task !== taskToRemove);
    this.updateRepeatedTasksList(taskToRemove);
  }

  onCleanDayMethod(): void {
    this.tasks.map((taskToRemove) => {
      this.updateRepeatedTasksList(taskToRemove);
    });
    this.tasks = [];
  }

  drop(event): void {
    const repeatedTask = event.item.element.nativeElement;

    const task = {
      name: repeatedTask.getElementsByClassName('repeated-name')[0].innerText,
      disabled: false,
      id: +repeatedTask
        .getElementsByClassName('repeated-name')[0]
        .getAttribute('id'),
      repetitions: null,
    };

    this.tasks.push(task);
  }

  updateRepeatedTasksList(task): void {
    if (task.id) {
      const repeatedTask = this.taskService.repeatedTasks.find(
        (taskItem) => taskItem.id === task.id
      );
      repeatedTask.repetitions += 1;
      repeatedTask.disabled = false;
    }
  }

  ngOnInit(): void {}
}
