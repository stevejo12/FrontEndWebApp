import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { AppRoutingModule } from './/app-routing.module';
import { LoginComponent } from './components/login/login.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { RegisterComponent } from './components/register/register.component';
import { SearchResultComponent } from './components/search-result/search-result.component';
import {DatahandleService} from './datahandle.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';
import { HotelprofileComponent } from './components/hotelprofile/hotelprofile.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    LoginComponent,
    ContactUsComponent,
    RegisterComponent,
    SearchResultComponent,
    EditProfileComponent,
    HotelprofileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BsDatepickerModule
  ],
  providers: [DatahandleService, LoginComponent, HeaderComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
