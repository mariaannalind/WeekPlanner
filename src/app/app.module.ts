import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DayModule } from './day/day.module';
import { WeekModule } from './week/week.module';
import { RepeatedTasksModule } from './repeated-tasks/repeated-tasks.module';
import { TasksService } from './shared/tasks.service';

@NgModule({
  declarations: [AppComponent],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    DayModule,
    WeekModule,
    RepeatedTasksModule,
  ],
  providers: [TasksService],
  bootstrap: [AppComponent],
})
export class AppModule {}
