import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { RepeatedTasksComponent } from './repeated-tasks.component';

@NgModule({
  declarations: [RepeatedTasksComponent],
  imports: [CommonModule, DragDropModule],
  exports: [RepeatedTasksComponent],
})
export class RepeatedTasksModule {}
