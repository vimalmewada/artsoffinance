import { Component } from '@angular/core';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.scss']
})
export class TeacherComponent {
  teamMembers = [
    {
      id: 1,
      name: 'Chitresh Goswami',
      position: 'Management Trainee - Surveillance And Investigation Department, Multi Commodity Exchange,',
      imageSrc: 'assets/img/guest1.jpg',
      detailsLink: 'team-details.html'
    },
    {
      id: 2,
      name: 'Nagendra Patra',
      position: 'Assistant Manager - Market Risk, IDBI Bank',
      imageSrc: 'assets/img/guest2.jpg',
      detailsLink: 'team-details.html'
    },
    {
      id: 3,
      name: 'Gaurav Mishra',
      position: 'ERM / Institutional Equities, IDBI Capital Investments',
      imageSrc: 'assets/img/guest3.jpeg',
      detailsLink: 'team-details.html'
    },
    {
      id: 4,
      name: 'Abhishek Jajoo',
      position: 'Management Trainee - Surveillance And Investigation Department, Multi Commodity Exchange, Ex-Treasury Dealer in ICICI Bank,',
      imageSrc: 'assets/img/guest4.jpg',
      detailsLink: 'team-details.html'
    },
    {
      id: 5,
      name: 'Chetan Singh Bisht',
      position: 'Management Trainee - MCXCCL (Spot, Delivery and Warehousing Operations)',
      imageSrc: 'assets/img/guest5.jpg',
      detailsLink: 'team-details.html'
    }
  ];
}
