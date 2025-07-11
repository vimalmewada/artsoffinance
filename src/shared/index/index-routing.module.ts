import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index.component';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from 'src/app/pages/about-us/about-us.component';
import { CoursesComponent } from 'src/app/pages/courses/courses.component';
import { TeacherComponent } from 'src/app/pages/teacher/teacher.component';
import { GalleryComponent } from 'src/app/pages/gallery/gallery.component';
import { ContactComponent } from 'src/app/pages/contact/contact.component';
import { HomeComponent } from '../home/home.component';
import { MentorComponent } from '../mentor/mentor.component';
import { MentorProfileComponent } from '../mentor/mentor-profile/mentor-profile.component';
import { CoursesListComponent } from 'src/app/pages/courses/courses-list/courses-list.component';
import { ViewCourseComponent } from 'src/app/pages/courses/view-course/view-course.component';
import { SummerCampComponent } from 'src/app/pages/summer-camp/summer-camp.component';
import { RazorpayComponent } from 'src/app/pages/summer-camp/razorpay/razorpay.component';
import { EventRegistrationComponent } from 'src/app/pages/event-registration/event-registration.component';
import { BlogComponent } from 'src/app/pages/blog/blog.component';
import { BlogDetailComponent } from 'src/app/pages/blog/blog-detail/blog-detail.component';

const routes: Routes = [

  {
    path: '',
    component: IndexComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'home', component: HomeComponent },
      { path: 'about-us', component: AboutUsComponent },
      { path: 'courses', component: CoursesComponent },
      { path: 'teachers', component: TeacherComponent },
      { path: 'gallery', component: GalleryComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'mentor-profile/:id', component: MentorProfileComponent },
      { path: 'courses/:sectionName', component: CoursesListComponent },
      { path: 'courses/:sectionName/:id', component: ViewCourseComponent },
      // { path:'registration-summer-camp', component:SummerCampComponent},
      { path: 'blog', component: BlogComponent },
      { path: 'blog/category/:category', component: BlogComponent },
      { path: 'blog-detail/:id', component: BlogDetailComponent },
      { path: 'registration-feePay', component: RazorpayComponent },
      { path: 'investor-awareness-event-registration', component: EventRegistrationComponent },

    ],
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IndexRoutingModule { }
