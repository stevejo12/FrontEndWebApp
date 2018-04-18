import { Component, OnInit } from '@angular/core';
import { DatahandleService } from '../../datahandle.service';
import { ActivatedRoute } from '@angular/router';
import { Hotelstructure } from '../../hotelstructure';

@Component({
  selector: 'app-hotelprofile',
  templateUrl: './hotelprofile.component.html',
  styleUrls: ['./hotelprofile.component.css']
})
export class HotelprofileComponent implements OnInit {

  available: any;
  hotelId: any;
  hotelInfo: any;
  roomInfo: any;
  // just to make sure hotelInfo has initial data
  // does not do anything
  myObj: any = {
    doSomething: function () { console.log('doing something'); return 'doing something'; },
  };
  constructor(private user: DatahandleService, private route: ActivatedRoute) { }
  hotelData() {
    this.route.params.subscribe(params => this.hotelId = params['id']);
    this.user.getId(this.hotelId).subscribe(
      val => { this.hotelInfo = val ; console.log(this.hotelInfo); },
      err => console.log(err),
    );
  }
  roomData(){
    this.user.getRoom(this.hotelId).subscribe(
      s => { this.roomInfo = s ; console.log(this.roomInfo[1].roomType); },
      err => console.log(err),
    );
  }
  checkAvailability() {
  }
  ngOnInit() {
    // initialization only ... later be replaced.
    this.hotelInfo = [this.myObj]; this.roomInfo = [this.myObj];
    // real initialization process begins
    this.hotelData();
    this.roomData();
  }

}
