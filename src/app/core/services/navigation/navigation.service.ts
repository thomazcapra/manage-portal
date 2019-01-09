import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  public currentUrl: string;

  constructor(private router: Router) {
    this.initialize();
  }

  private initialize(): void {
    this.listenUrlChanges();
  }

  private listenUrlChanges(): void {
    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd),
        map((event: NavigationEnd) => event.url)
      )
      .subscribe((url: string) => {
        this.currentUrl = url;
      });
  }
}
