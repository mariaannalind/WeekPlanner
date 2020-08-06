import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeekComponent } from './week.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { DayModule } from './../day/day.module';

@NgModule({
  declarations: [WeekComponent],
  imports: [CommonModule, DragDropModule, DayModule],
  exports: [WeekComponent],
})
export class WeekModule {}
