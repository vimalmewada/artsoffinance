import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-summer-camp',
  templateUrl: './summer-camp.component.html',
  styleUrls: ['./summer-camp.component.scss']
})
export class SummerCampComponent {

  openRazorpay() {
    window.open('https://pages.razorpay.com/pl_QHomBLRtldRKL7/view', '_blank');
  }

}
