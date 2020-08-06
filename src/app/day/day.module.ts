import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DayComponent } from './day.component';

import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [DayComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatListModule,
    MatInputModule,
    MatIconModule,
    MatGridListModule,
    MatButtonModule,
  ],
  exports: [DayComponent],
})
export class DayModule {}
