import { Injectable } from '@angular/core';

declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

@Injectable({
  providedIn: 'root'
})
export class GtagService {
  constructor() {
    this.loadGtag();
  }

  private loadGtag(): void {
    if (!window.dataLayer) {
      window.dataLayer = [];
    }

    function gtag(...args: any[]) {
      window.dataLayer.push(args);
    }

    window.gtag = gtag;
    window.gtag('js', new Date());
    window.gtag('config', 'AW-16455467896');

    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=AW-16455467896';
    document.head.appendChild(script);
  }
}
