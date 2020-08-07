import { Component, OnInit, Input } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { IRepeatedTask } from './repeated-task';

@Component({
  selector: 'app-repeated-tasks',
  templateUrl: './repeated-tasks.component.html',
  styleUrls: ['./repeated-tasks.component.css'],
})
export class RepeatedTasksComponent implements OnInit {
  repeatedTasks: IRepeatedTask[];
  @Input() event: CdkDragDrop<string[]>;

  constructor() {}

  drop(event: CdkDragDrop<string[]>): void {
    moveItemInArray(
      this.repeatedTasks,
      event.previousIndex,
      event.currentIndex
    );
  }

  ngOnInit(): void {
    this.repeatedTasks = [
      { id: 1, name: 'vaccuum', repetitions: 2 },
      { id: 2, name: 'water plants', repetitions: 1 },
      { id: 3, name: 'shop', repetitions: 1 },
      { id: 4, name: 'plan dinners', repetitions: 1 },
      { id: 5, name: 'laundry', repetitions: 4 },
    ];
  }
}
