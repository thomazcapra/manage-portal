import { Component, OnDestroy } from '@angular/core';
import { ApiService, NavigationService } from '@portal/services';
import { Subject } from 'rxjs';

interface MenuItem {
  routerLink: string[];
  description: string;
  icon?: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {
  public links = <MenuItem[]>[
    {
      routerLink: ['home'],
      description: 'HOME',
      icon: 'home'
    },
    {
      routerLink: ['personal'],
      description: 'PESSOAL',
      icon: 'account_circle'
    },
    {
      routerLink: ['timesheet'],
      description: 'Timesheet',
      icon: 'event'
    },
    {
      routerLink: ['refund'],
      description: 'Pedidos de Reembolso',
      icon: 'euro_symbol'
    },
    {
      routerLink: ['vocation'],
      description: 'Férias',
      icon: 'beach_access'
    },
    {
      routerLink: ['tickets'],
      description: 'My Tickets',
      icon: 'folder_shared'
    },
    {
      routerLink: ['events'],
      description: 'Inscrição em Eventos',
      icon: 'how_to_reg'
    },
    {
      routerLink: ['documents'],
      description: 'Consulta de Documentos',
      icon: 'file_copy'
    }
  ];

  constructor(
    private apiService: ApiService,
    private navigationSerice: NavigationService
  ) {

  }

  public ngOnDestroy(): void {}

  /**
   *
   * Return true if the index is the selected one.
   *
   * @param index The index of the menu item (starting at 0).
   */
  public isSelected(index: number): boolean {
    const url =
      this.navigationSerice.currentUrl &&
      this.navigationSerice.currentUrl.replace('/', '');
    return this.links[index].routerLink.includes(url);
  }
}
