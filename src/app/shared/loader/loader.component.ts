import { Component, OnDestroy } from '@angular/core';
import { SidenavService } from '../services/sidenav.service';
import { LoaderService } from '../services/loader.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
})
export class LoaderComponent implements OnDestroy {
  showLoader: boolean = false;
  subscription: Subscription;
  constructor(private loaderService: LoaderService) {
    this.subscription = this.loaderService.showLoader.subscribe((newStatus) => {
      this.showLoader = newStatus;
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
