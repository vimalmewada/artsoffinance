import { Component } from '@angular/core';
import { GtagService } from './pages/services/gtag.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'artsoffinance';
  constructor(private gtagService: GtagService) {}
}
