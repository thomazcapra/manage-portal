import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimesheetComponent } from './timesheet.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../core/shared.module';
import { MatCardModule } from '@angular/material';

const routes = [
  {
    path: '',
    component: TimesheetComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    MatCardModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule
  ],
  declarations: [TimesheetComponent]
})
export class TimesheetModule {}
