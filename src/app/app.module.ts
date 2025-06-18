import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { EventRegistrationComponent } from './pages/event-registration/event-registration.component';
import { BlogComponent } from './pages/blog/blog.component';
import { BlogDetailComponent } from './pages/blog/blog-detail/blog-detail.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    LazyLoadImageModule,
    AppRoutingModule
  ],
  providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA] ,
  bootstrap: [AppComponent]
})
export class AppModule { }
