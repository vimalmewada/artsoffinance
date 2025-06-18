import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-map-locator',
  templateUrl: './map-locator.component.html',
  styleUrls: ['./map-locator.component.scss']
})
export class MapLocatorComponent implements AfterViewInit {
  @ViewChild('mapContainer', { static: true }) mapContainer!: ElementRef;

  private readonly configuration = {
    locations: [
      {
        title: 'Arts of Finance Institute | Share Market Training & Stock Market Classes in Bhopal',
        address1: 'Plot no.12 C, Near By Pragati Petrol Pump M.P. Nagar Zone 2 Bhopal',
        address2: 'Bhopal, Madhya Pradesh, India',
        coords: { lat: 23.2295714, lng: 77.4349423 },
        placeId: 'ChIJo9anevhDfDkRcubKefD7sdo'
      }
    ],
    mapOptions: {
      center: { lat: 23.2295714, lng: 77.4349423 },
      fullscreenControl: true,
      mapTypeControl: false,
      streetViewControl: false,
      zoom: 15,
      zoomControl: true,
      maxZoom: 17
    },
    mapsApiKey: 'AIzaSyB41DRUbKWJHPxaFjMAwdrzWzbVKartNGg',
    capabilities: {
      input: true,
      autocomplete: true,
      directions: false,
      distanceMatrix: true,
      details: false,
      actions: false
    }
  };

  ngAfterViewInit() {
   // this.initializeMap();
  }

  private async initializeMap() {
    // Load the Google Maps Extended Component Library
    await this.loadScript('https://ajax.googleapis.com/ajax/libs/@googlemaps/extended-component-library/0.6.11/index.min.js');
    
    // Create API loader
    const apiLoader = document.createElement('gmpx-api-loader');
    apiLoader.setAttribute('key', this.configuration.mapsApiKey);
    apiLoader.setAttribute('solution-channel', 'GMP_QB_locatorplus_v11_cABD');
    this.mapContainer.nativeElement.appendChild(apiLoader);
    
    // Create store locator
    const locator = document.createElement('gmpx-store-locator');
    locator.setAttribute('map-id', 'DEMO_MAP_ID');
    this.mapContainer.nativeElement.appendChild(locator);
    
    // Wait for component to be defined
    await customElements.whenDefined('gmpx-store-locator');
    
    // Configure the locator
    // @ts-ignore - configureFromQuickBuilder is available after component loads
    locator.configureFromQuickBuilder(this.configuration);
  }

  private loadScript(src: string): Promise<void> {
    return new Promise((resolve, reject) => {
      if (document.querySelector(`script[src="${src}"]`)) {
        resolve();
        return;
      }

      const script = document.createElement('script');
      script.src = src;
      script.type = 'module';
      script.onload = () => resolve();
      script.onerror = (err) => reject(err);
      document.head.appendChild(script);
    });
  }
}