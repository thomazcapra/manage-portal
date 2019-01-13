import { NgModule } from '@angular/core';
import { services as SERVICES } from './services';
import { components as COMPONENTS } from './components';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [...COMPONENTS],
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  exports: [...COMPONENTS],
  providers: [...SERVICES]
})
export class SharedModule {}
