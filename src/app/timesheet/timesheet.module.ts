import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimesheetComponent } from './timesheet.component';
import { RouterModule } from '@angular/router';

const routes = [
  {
    path: '',
    component: TimesheetComponent
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  declarations: [TimesheetComponent]
})
export class TimesheetModule {}
