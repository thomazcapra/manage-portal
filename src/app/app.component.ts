import { Component, OnDestroy } from '@angular/core';
import { LoggerService, NavigationService } from '@portal/services';

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
  /**
   * List of links to be shown,
   * each link must have its desciption
   * icon and router link.
   */
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
    private navigationService: NavigationService,
    private loggerService: LoggerService
  ) {
    this.loggerService.log('mensagem', this.constructor);
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
      this.navigationService.currentUrl &&
      this.navigationService.currentUrl.replace('/', '');
    return this.links[index].routerLink.includes(url);
  }
}
