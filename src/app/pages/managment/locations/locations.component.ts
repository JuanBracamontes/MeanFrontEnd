import { HttpClient } from '@angular/common/http';
import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  AfterViewInit,
  OnDestroy,
} from '@angular/core';
import maplibregl, { Map, MapLibreGL, NavigationControl } from 'maplibre-gl';
import { LoaderService } from 'src/app/shared/services/loader.service';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.scss'],
})
export class LocationsComponent
  implements OnInit, AfterViewInit, OnDestroy, AfterViewInit
{
  map!: Map;
  @ViewChild('map')
  mapContainer!: ElementRef<HTMLElement>;
  initialState = {
    lng: 29.07642910768852,
    lat: -110.95671773034871,
    zoom: 13,
  };
  constructor(private loaderService: LoaderService, private http: HttpClient) {
    // setTimeout(() => {
    //   this.loaderService.changeLoaderStatus(false);
    // }, 1000);
  }

  markers = [
    { lng: 29.09869536042193, lat: -111.00167929676822 },
    { lng: 29.10398221062482, lat: -110.95345189243724 },
  ];

  ngOnDestroy(): void {
    this.map?.remove();
  }
  ngAfterViewInit(): void {
    this.map = new Map({
      container: this.mapContainer.nativeElement,
      style: `https://api.maptiler.com/maps/streets-v2/style.json?key=LsKkZ9xhX7LnsIanxSb9`,
      center: [this.initialState.lat, this.initialState.lng],
      zoom: this.initialState.zoom,
    });

    this.map.addControl(new NavigationControl({}), 'top-right');
    this.markers.forEach((location) => {
      new maplibregl.Marker()
        .setLngLat([location.lat, location.lng])
        .addTo(this.map);
    });

    // this.map.addControl(
    //   new MapLibreGL.GeolocateControl()
    // )

    setTimeout(() => {
      this.loaderService.changeLoaderStatusTo(false);
    }, 100);

    this.searchAddress();
  }
  ngOnInit(): void {
    this.loaderService.changeLoaderStatusTo(true);
  }

  searchAddress() {
    let addressInput = 'Imss Juarez hermosillo';
    let requestUrl: string = `https://nominatim.openstreetmap.org/search?q=${addressInput}&format=geojson&polygon_geojson=1&addressdetails=1`;
    this.http.get(requestUrl).subscribe((response) => {
      debugger;
      console.log(response);
    });
  }
}
