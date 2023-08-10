import { Component } from '@angular/core';
import { SidenavService } from './shared/services/sidenav.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'FrontEndPractice';
  showDrawer: boolean | null = null;
  constructor(private sidenavService: SidenavService, public router: Router) {
    this.sidenavService.sidebarStatus.subscribe((status) => {
      this.showDrawer = status;
    });
  }
}
