import { Component, OnDestroy, OnInit } from '@angular/core';
import { SidenavService } from '../services/sidenav.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  sidenavInitialStatus: boolean = true;
  private _subscription: Subscription | null = null;

  constructor(private sidenavService: SidenavService) {}

  ngOnDestroy(): void {
    this._subscription?.unsubscribe();
  }

  ngOnInit(): void {
    this._subscription = this.sidenavService.sidebarStatus.subscribe((x) => {
      this.sidenavInitialStatus = x;
    });
  }

  notifySidenav() {
    this.sidenavInitialStatus = !this.sidenavInitialStatus;
    this.sidenavService.setSidebarStatus(this.sidenavInitialStatus);
  }
}
