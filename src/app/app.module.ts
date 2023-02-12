import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { NgbCarousel, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AlertModule, CarouselModule, FormModule } from '@coreui/angular';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MovielistComponent } from './movielist/movielist.component';
import { SliderComponent } from './slider/slider.component';
import { RecommendedComponent } from './recommended/recommended.component';
import { AuthFormComponent } from './auth-form/auth-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
// import { LoginComponent } from './login/login.component';


// import {IvyCarouselModule} from 'angular-responsive-carousel';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    MovielistComponent,
    SliderComponent,
    RecommendedComponent,
    AuthFormComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgbCarousel,
    AlertModule,
    CarouselModule,
    FormModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
