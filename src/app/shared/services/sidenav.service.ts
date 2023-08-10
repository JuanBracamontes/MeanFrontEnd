import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SidenavService {
  public sidebarStatus = new Subject<boolean>();
  constructor() {
    this.sidebarStatus.next(true);
  }

  setSidebarStatus(newStatus: boolean) {
    this.sidebarStatus.next(newStatus);
  }
}
