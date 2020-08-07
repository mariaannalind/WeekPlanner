import { Component, OnInit, Input } from '@angular/core';
import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { ClassGetter } from '@angular/compiler/src/output/output_ast';

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

  drop(event): void {
    const repeatedTaskText = event.item.element.nativeElement.innerText;
    this.tasks.push(repeatedTaskText);
  }

  ngOnInit(): void {}
}
