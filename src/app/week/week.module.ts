import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeekComponent } from './week.component';
import { DayModule } from './../day/day.module';
import { RepeatedTasksModule } from './../repeated-tasks/repeated-tasks.module';
import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [WeekComponent],
  imports: [CommonModule, DayModule, RepeatedTasksModule, DragDropModule],
  exports: [WeekComponent],
})
export class WeekModule {}
