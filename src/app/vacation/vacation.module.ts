import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VacationComponent } from './vacation.component';
import { RouterModule } from '@angular/router';

const routes = [
  {
    path: '',
    component: VacationComponent
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  declarations: [VacationComponent]
})
export class VacationModule {}
