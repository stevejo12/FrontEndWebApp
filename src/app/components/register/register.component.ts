import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatahandleService} from '../../datahandle.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public formData: any = {};
  constructor(private router: Router, private user: DatahandleService ) { }

  ngOnInit() {
  }
  registerValidate() {
    this.user.checkRegister(this.formData).subscribe(() => {
        this.router.navigateByUrl('/login')
      },
      err => {
        alert('Register Unsuccessful');
      }, () => {
        alert('Register Successful');
      }
    );
  }
}
