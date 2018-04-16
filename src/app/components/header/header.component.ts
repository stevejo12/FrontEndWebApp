import { Component, OnInit } from '@angular/core';
import { DatahandleService } from '../../datahandle.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  // public myImage = 'assets/img/background.jpg';

  private loggedIn: boolean;

  constructor(private userHandle: DatahandleService) { }

  ngOnInit() {
  }

  setLogin() {
    this.loggedIn = true;
  }

  getLogin() {
    return this.loggedIn;
  }

  logout() {
    this.userHandle.logout();
    this.loggedIn = this.userHandle.getLoggedIn();
  }


}
