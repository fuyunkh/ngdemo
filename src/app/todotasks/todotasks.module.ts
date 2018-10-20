import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksComponent } from './tasks/tasks.component';
import { TaskDetailComponent } from './task-detail/task-detail.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TasksComponent, TaskDetailComponent]
})
export class TodotasksModule { }
