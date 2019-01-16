import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../core/shared.module';
import { PersonalComponent } from './personal.component';

const routes = [
  {
    path: '',
    component: PersonalComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PersonalComponent]
})
export class PersonalModule {}
