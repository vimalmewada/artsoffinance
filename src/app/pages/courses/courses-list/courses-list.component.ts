import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from 'src/shared/services/course.service';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss']
})
export class CoursesListComponent  implements OnInit{
  sectionName: string|any;
  COURSE_LIST_BY_SECTION: any[]=[];
  constructor(private route: ActivatedRoute,private courseService:CourseService) {}
  ngOnInit(): void {
    this.sectionName = this.route.snapshot.paramMap.get('sectionName')!;
    if(this.sectionName){
      this.COURSE_LIST_BY_SECTION=this.courseService.getCourseBySection(this.sectionName);
    }
  }
}
