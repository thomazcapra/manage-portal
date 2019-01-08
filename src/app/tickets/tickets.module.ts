import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TicketsComponent } from './tickets.component';
import { RouterModule } from '@angular/router';

const routes = [
  {
    path: '',
    component: TicketsComponent
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  declarations: [TicketsComponent]
})
export class TicketsModule {}
