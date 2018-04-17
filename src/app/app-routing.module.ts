import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import {HomeComponent} from './components/home/home.component';
import {ContactUsComponent} from './components/contact-us/contact-us.component';
import {RegisterComponent} from './components/register/register.component';
import {SearchResultComponent} from './components/search-result/search-result.component';
import {EditProfileComponent} from './components/edit-profile/edit-profile.component';


const appRoutes: Routes = [
  {
    path: 'contact-us',
    component: ContactUsComponent
  },
  {
    path: 'search-result',
    component: SearchResultComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'editProfile',
    component: EditProfileComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes),
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
