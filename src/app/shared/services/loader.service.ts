import { Injectable } from '@angular/core';
import { SidenavService } from './sidenav.service';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoaderService {
  public showLoader = new Subject<boolean>();
  constructor(private sidenavService: SidenavService) {}

  changeLoaderStatusTo(newStatus: boolean) {
    this.showLoader.next(newStatus);
  }
}
