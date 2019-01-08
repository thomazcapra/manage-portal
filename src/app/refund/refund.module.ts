import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RefundComponent } from './refund.component';
import { RouterModule } from '@angular/router';

const routes = [
  {
    path: '',
    component: RefundComponent
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  declarations: [RefundComponent]
})
export class RefundModule {}
