import { Component } from '@angular/core';
import { MentorService } from '../services/mentor.service';

@Component({
  selector: 'app-mentor',
  templateUrl: './mentor.component.html',
  styleUrls: ['./mentor.component.scss']
})
export class MentorComponent {
  mentorList: any;
  constructor(private _mentorService:MentorService){
    this.mentorList=this._mentorService.getMentors();
  }
  
}
