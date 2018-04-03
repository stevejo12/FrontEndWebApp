import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatahandleService} from '../../datahandle.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  constructor(private router: Router, private user: DatahandleService ) { }


  ngOnInit() {
  }

  searchProcess(e){
    var loc = e.target.elements[0].value;
    var date = e.target.elements[1].value;
    this.user.logoutUser();
    console.log(this.user.getUserLoggedIn());
    if ( this.user.getUserLoggedIn() ) {
      alert("Success");
      return false;
    }

    return false;

  }


}
