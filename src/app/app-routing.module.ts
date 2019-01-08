import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: './home/home.module#HomeModule'
  },
  {
    path: 'personal',
    loadChildren: './personal/personal.module#PersonalModule'
  },
  {
    path: 'timesheet',
    loadChildren: './timesheet/timesheet.module#TimesheetModule'
  },
  {
    path: 'refund',
    loadChildren: './refund/refund.module#RefundModule'
  },
  {
    path: 'vocation',
    loadChildren: './vocation/vocation.module#VocationModule'
  },
  {
    path: 'tickets',
    loadChildren: './tickets/tickets.module#TicketsModule'
  },
  {
    path: 'events',
    loadChildren: './events/events.module#EventsModule'
  },
  {
    path: 'documents',
    loadChildren: './documents/documents.module#DocumentsModule'
  },
  {
    path: '',
    loadChildren: './login/login.module#LoginModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
