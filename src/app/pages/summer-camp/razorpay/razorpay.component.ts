import { AfterViewInit, Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-razorpay',
  templateUrl: './razorpay.component.html',
  styleUrls: ['./razorpay.component.scss']
})
export class RazorpayComponent  implements OnInit{
// implements AfterViewInit {

  // ngAfterViewInit() {
  //   this.loadRazorpayEmbedScript();
  // }
  showIframe = false;
  razorpayUrl!: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {
   
  }
  ngOnInit(): void {
    this.showPayment();
  }

  showPayment() {
    const url = 'https://pages.razorpay.com/pl_QHomBLRtldRKL7/view';
    this.razorpayUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
    this.showIframe = true;
  }

  // loadRazorpayEmbedScript() {
  //   const scriptId = 'razorpay-embed-btn-js';
  //   if (document.getElementById(scriptId)) {
  //     const rzp = (window as any)['__rzp__'];
  //     if (rzp && rzp.init) {
  //       rzp.init();
  //     }
  //     return;
  //   }

  //   const script = document.createElement('script');
  //   script.src = 'https://cdn.razorpay.com/static/embed_btn/bundle.js';
  //   script.id = scriptId;
  //   script.defer = true;
  //   document.body.appendChild(script);
  // }

}
