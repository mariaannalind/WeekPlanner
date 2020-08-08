import { Component, OnInit, Input } from '@angular/core';
import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { RepeatedTasksService } from '../repeated-tasks/repeated-tasks.service';

@Component({
  selector: 'app-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.css'],
})
export class DayComponent implements OnInit {
  tasks: string[] = [];
  newTask: string = '';
  @Input() dayName: string;
  @Input() event: CdkDragDrop<string[]>;

  constructor(private repeatedTasksService: RepeatedTasksService) {}

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

  drop(event): void {
    const repeatedTask = event.item.element.nativeElement;
    const repeatedTaskText = repeatedTask.getElementsByClassName(
      'repeated-name'
    )[0].innerText;

    this.tasks.push(repeatedTaskText);
  }

  ngOnInit(): void {}
}
