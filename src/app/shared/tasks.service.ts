import { Injectable } from '@angular/core';
import { ITask } from '../repeated-tasks/task';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  repeatedTasks: ITask[];

  constructor() {
    this.repeatedTasks = [
      { id: 1, name: 'vaccuum', repetitions: 2, disabled: false },
      { id: 2, name: 'water plants', repetitions: 1, disabled: false },
      { id: 3, name: 'shop', repetitions: 1, disabled: false },
      { id: 4, name: 'plan dinners', repetitions: 1, disabled: false },
      { id: 5, name: 'laundry', repetitions: 4, disabled: false },
    ];
  }
}
