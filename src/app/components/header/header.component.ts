import { Component, OnInit } from '@angular/core';
import { DatahandleService } from '../../datahandle.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  // public myImage = 'assets/img/background.jpg';

  loggedIn: boolean;

  constructor(private userHandle: DatahandleService) { }

  ngOnInit() {
    this.checkLogged();
  }

  checkLogged() {
    if ( localStorage.getItem('token') ) {
      this.loggedIn = true;
    } else {
      this.loggedIn = false;
    }
  }

  logout() {
    this.userHandle.logout();
  }


}
