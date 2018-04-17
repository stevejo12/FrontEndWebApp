import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatahandleService} from '../../datahandle.service';
import { HeaderComponent} from '../header/header.component';
import {Signin} from '../../signin';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private router: Router, private user: DatahandleService, private userHeader: HeaderComponent ) { }
  public formData: any = {};
  ngOnInit() {
  }

  // loginValidate() {
  //   this.user.checkSignIn(this.formData).subscribe(() => {
  //     // this.user.checkAuth();
  //     // this.userHeader.setLogin();
  //     console.log(this.formData);
  //     },
  //     () => {
  //       console.log('login unsuccessful');
  //       alert('Login Unsuccessful');
  //     }, () => {
  //       console.log('login success321');
  //       alert('Login Successful');
  //       this.router.navigateByUrl('/');
  //     }
  //   );
  // }

  loginValidate() {
    this.user.checkSignIn(this.formData).subscribe(
      () => this.router.navigateByUrl('/'),
      (error) => { alert(error) ; console.log('error here') }
    );
  }

}
