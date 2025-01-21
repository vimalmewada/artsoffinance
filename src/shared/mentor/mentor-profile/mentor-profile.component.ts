import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MentorService } from 'src/shared/services/mentor.service';

@Component({
  selector: 'app-mentor-profile',
  templateUrl: './mentor-profile.component.html',
  styleUrls: ['./mentor-profile.component.scss']
})
export class MentorProfileComponent  implements OnInit{
  mentorId: string | null = null;
  mentor: any;
  constructor(private route: ActivatedRoute,private mentorService:MentorService) {}
  ngOnInit(): void {
    this.mentorId = this.route.snapshot.paramMap.get('id');
    this.mentor = this.mentorService.getMentorById(Number(this.mentorId));
}
}
