import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonalComponent } from './personal.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material';

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
    RouterModule.forChild(routes)
  ],
  declarations: [PersonalComponent]
})
export class PersonalModule {}
