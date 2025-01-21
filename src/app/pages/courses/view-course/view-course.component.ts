import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from 'src/shared/services/course.service';

@Component({
  selector: 'app-view-course',
  templateUrl: './view-course.component.html',
  styleUrls: ['./view-course.component.scss']
})
export class ViewCourseComponent implements OnInit {
  courseId: any;
  sectionName: string | any;
  course: any;
  
  constructor(private route: ActivatedRoute,private courseService:CourseService) { }
  
  ngOnInit(): void {
    this.courseId = this.route.snapshot.paramMap.get('id');
    this.sectionName = this.route.snapshot.paramMap.get('sectionName');
    if(this.courseId){
      const id = Number(this.courseId); 
      this.course=this.courseService.getCourseById(id);
    }
  }
}
