import { Component, OnDestroy } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { Subscription, filter } from 'rxjs';

export interface IBreadCrumb {
  label: string;
  url: string;
}

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss'],
})
export class BreadcrumbComponent implements OnDestroy {
  public breadcrumbs: any[] = [];
  public subsBreadcrumbs: Subscription;

  constructor(private router: Router) {
    this.subsBreadcrumbs = this.getRouteParameters().subscribe((route: any) => {
      this.breadcrumbs = route.snapshot.data.breadcrumb;
    });
  }

  ngOnDestroy(): void {
    this.subsBreadcrumbs.unsubscribe();
  }

  getRouteParameters() {
    return this.router.events.pipe(
      filter((event: any) => event instanceof ActivationEnd),
      filter((event: ActivationEnd) => event.snapshot.firstChild == null)
    );
  }
}
