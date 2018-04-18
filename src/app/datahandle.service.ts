import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';

const httpOpt = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};

@Injectable()
export class DatahandleService { headers = new Headers();
  constructor(private http: HttpClient) {
  }
  token = localStorage.token;
  checkSignIn(formData) {
    let response: any = {};
    this.headers.append('Content-Type', 'application/json');
    const url = 'http://localhost:8000/api/login';
    return this.http.post(url, formData, httpOpt).map(res => {
      response = res;
      if ( res ) {
        console.log('here');
        console.log(res);
        localStorage.setItem('token', 'formData');
        return res;
      }
    });
  }
  checkRegister(formData) {
    this.headers.append('Content-Type', 'application/json');
    const urlB = 'http://localhost:8000/api/register';
    return this.http.post(urlB, formData, httpOpt);
  }
  logout() {
    const urlC = 'http://localhost:8000/api/logout';
    if ( localStorage.length === 0 ) {
      alert('empty storage');
    } else {
      alert('Successfully Logout');
    }
    localStorage.removeItem('token');
    return this.http.get(urlC, httpOpt);
  }

  getId( id: number) {
    const urlD = 'http://localhost:8000/api/hotel/' + id;
    return this.http.get(urlD, httpOpt).map(res => {
      console.log(res);
      return res;
    });
  }

  getRoom( id: number ) {
    const urlE = 'http://localhost:8000/api/hotelList/' + id;
    return this.http.get(urlE, httpOpt).map(res => {
      console.log(res);
      return res;
    });
  }

}


