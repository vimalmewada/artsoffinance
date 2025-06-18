import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index.component';
import { IndexRoutingModule } from './index-routing.module';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { FooterComponent } from '../footer/footer.component';
import { TradingviewWidgetComponent } from '../tradingview-widget/tradingview-widget.component';
import { AboutUsComponent } from 'src/app/pages/about-us/about-us.component';
import { ContactComponent } from 'src/app/pages/contact/contact.component';
import { CoursesComponent } from 'src/app/pages/courses/courses.component';
import { GalleryComponent } from 'src/app/pages/gallery/gallery.component';
import { TeacherComponent } from 'src/app/pages/teacher/teacher.component';
import { HomeComponent } from '../home/home.component';
import { MentorComponent } from '../mentor/mentor.component';
import { MentorProfileComponent } from '../mentor/mentor-profile/mentor-profile.component';
import { ReviewComponent } from '../review/review.component';
import { CourseSectionComponent } from '../course-section/course-section.component';
import { CoursesListComponent } from 'src/app/pages/courses/courses-list/courses-list.component';
import { ViewCourseComponent } from 'src/app/pages/courses/view-course/view-course.component';
import { SliderSectionComponent } from '../slider-section/slider-section.component';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { SummerCampComponent } from 'src/app/pages/summer-camp/summer-camp.component';
import { RazorpayComponent } from 'src/app/pages/summer-camp/razorpay/razorpay.component';
import { EventRegistrationComponent } from 'src/app/pages/event-registration/event-registration.component';
import { BlogComponent } from 'src/app/pages/blog/blog.component';
import { BlogDetailComponent } from 'src/app/pages/blog/blog-detail/blog-detail.component';
import { MapLocatorComponent } from '../map-locator/map-locator.component';


@NgModule({
  declarations: [
    IndexComponent,
    NavBarComponent,
    FooterComponent,
    TradingviewWidgetComponent,
    HomeComponent,
    AboutUsComponent,
    CoursesComponent,
    TeacherComponent,
    GalleryComponent,
    ContactComponent,
    MentorComponent,
    MentorProfileComponent,
    ReviewComponent,
    CourseSectionComponent,
    CoursesListComponent,
    ViewCourseComponent,
    SliderSectionComponent,
    SummerCampComponent,
    RazorpayComponent,
    EventRegistrationComponent,
    BlogComponent,
    BlogDetailComponent,
    MapLocatorComponent
  ],
  imports: [
    CommonModule,
    IndexRoutingModule,
    LazyLoadImageModule
  ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class IndexModule { }
