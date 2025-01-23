import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  isContentLoaded = false;

  ngOnInit() {
    setTimeout(() => {
      this.isContentLoaded = true;
    }, 500);
  }
}
