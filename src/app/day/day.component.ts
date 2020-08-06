import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.css'],
})
export class DayComponent implements OnInit {
  tasks: string[] = [];
  newTask: string = '';
  @Input() dayName: string;

  constructor() {}

  onAddTaskMethod(): void {
    if (this.newTask !== '') {
      this.tasks.push(this.newTask);
      this.newTask = '';
    }
  }

  onRemoveTaskMethod(task): void {
    this.tasks = this.tasks.filter((taskElement) => taskElement !== task);
  }

  onCleanDayMethod(): void {
    this.tasks = [];
  }

  ngOnInit(): void {}
}
