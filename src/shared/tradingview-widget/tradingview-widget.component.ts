import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-tradingview-widget',
  templateUrl: './tradingview-widget.component.html',
  styleUrls: ['./tradingview-widget.component.scss']
})
export class TradingviewWidgetComponent  implements AfterViewInit {
  ngAfterViewInit(): void {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js';
    script.async = true;
    script.innerHTML = JSON.stringify({
      symbols: [
        { proName: 'FOREXCOM:SPXUSD', title: 'S&P 500' },
        { proName: 'FOREXCOM:NSXUSD', title: 'US 100' },
        { proName: 'FX_IDC:EURUSD', title: 'EUR to USD' },
        { proName: 'BITSTAMP:BTCUSD', title: 'Bitcoin' },
        { proName: 'BITSTAMP:ETHUSD', title: 'Ethereum' }
      ],
      showSymbolLogo: true,
      isTransparent: false,
      displayMode: 'adaptive',
      colorTheme: 'dark',
      locale: 'en',
    });
    document.getElementById('tradingview-widget')?.appendChild(script);
  }
}
