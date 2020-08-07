import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-week',
  templateUrl: './week.component.html',
  styleUrls: ['./week.component.css'],
})
export class WeekComponent implements OnInit {
  weekDays: string[];

  constructor() {}

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
  }
}
