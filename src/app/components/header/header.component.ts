import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public sideBar = "assets/img/sidebar.jpg";
  public myImage = "assets/img/pic1.jpg";

  constructor() { }

  ngOnInit() {

  }

}
