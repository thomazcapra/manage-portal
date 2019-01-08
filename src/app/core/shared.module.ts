import { NgModule } from '@angular/core';
import { services as SERVICES } from './services';
import { components as COMPONENTS } from './components';

@NgModule({
  declarations: [...COMPONENTS],
  imports: [...COMPONENTS],
  exports: [...COMPONENTS],
  providers: [...SERVICES]
})
export class SharedModule {}
