import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { RepeatedTasksComponent } from './repeated-tasks.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [RepeatedTasksComponent],
  imports: [
    CommonModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    FormsModule,
    DragDropModule,
  ],
  exports: [RepeatedTasksComponent],
})
export class RepeatedTasksModule {}
