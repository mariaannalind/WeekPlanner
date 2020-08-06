import { Component, OnInit } from '@angular/core';

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

  drop(event): void {
    console.log(event);
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
