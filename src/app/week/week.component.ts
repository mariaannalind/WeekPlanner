import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-week',
  templateUrl: './week.component.html',
  styleUrls: ['./week.component.css'],
})
export class WeekComponent implements OnInit {
  weekDays: string[];
  repeatedTasks: string[];
  done: string[];

  constructor() {}

  drop(event: CdkDragDrop<string[]>): void {
    moveItemInArray(
      this.repeatedTasks,
      event.previousIndex,
      event.currentIndex
    );
  }

  ngOnInit(): void {
    this.weekDays = [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday',
    ];

    this.repeatedTasks = ['vaccuum', 'water plants', 'plan dinners', 'shop'];
  }
}
