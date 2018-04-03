import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatahandleService} from '../../datahandle.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public formData: any = {};
  constructor(private router: Router, private user: DatahandleService ) { }

  ngOnInit() {
  }

  loginValidate() {
    this.user.checkSignIn(this.formData).subscribe(() => {
        this.router.navigateByUrl('/')
      },
      err => {
        alert('Login Unsuccessful');
      }, () => {
        alert('Login Successful');
      }
    );
  }

}
