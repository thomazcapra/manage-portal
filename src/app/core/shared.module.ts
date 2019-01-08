import { NgModule } from '@angular/core';
import { services as SERVICES } from './services';
import { components as COMPONENTS } from './components';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [...COMPONENTS],
  imports: [CommonModule],
  exports: [...COMPONENTS],
  providers: [...SERVICES]
})
export class SharedModule {}
