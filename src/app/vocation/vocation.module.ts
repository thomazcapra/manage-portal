import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VocationComponent } from './vocation.component';
import { RouterModule } from '@angular/router';

const routes = [
  {
    path: '',
    component: VocationComponent
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  declarations: [VocationComponent]
})
export class VocationModule {}
