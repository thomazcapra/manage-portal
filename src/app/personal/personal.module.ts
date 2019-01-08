import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonalComponent } from './personal.component';
import { RouterModule } from '@angular/router';

const routes = [
  {
    path: '',
    component: PersonalComponent
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  declarations: [PersonalComponent]
})
export class PersonalModule {}
