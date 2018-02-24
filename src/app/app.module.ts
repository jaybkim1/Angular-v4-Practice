import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Third party Imports
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CarouselModule } from 'ngx-bootstrap/carousel';

// Alphabetical Order
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { HomeComponent } from './home/home.component';
import { SafePipe } from './utility/safe.pipe';
import { VideoListComponent } from './video-list/video-list.component';
import { VideoDetailComponent } from './video-detail/video-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SafePipe,
    VideoListComponent,
    VideoDetailComponent,
  ],
  imports: [
    BrowserModule,
    
    // ngx-bootstrap
    BsDropdownModule.forRoot(),
    CarouselModule.forRoot(),
    // routing 
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
