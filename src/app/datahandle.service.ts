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


  private loggedIn: boolean;

  // checkSignIn(formData) {
  //   this.headers.append('Content-Type', 'application/json');
  //   const urlA = 'http://localhost:8000/api/login';
  //   return this.http.post(urlA, formData).map(res => {
  //     console.log(res);
  //     if (res) {
  //       localStorage.setItem('token', 'formData');
  //     }
  //   });
  // }
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

  checkAuth() {
    this.loggedIn = true;
  }

  getLoggedIn() {
    return this.loggedIn;
  }
  logout() {
    const urlC = 'http://localhost:8000/api/logout';
    if ( localStorage.length === 0 ) {
      alert('empty storage');
    } else {
      alert('removed');
    }
    localStorage.removeItem('token');
    this.loggedIn = false;
    return this.http.get(urlC, httpOpt);
  }
  searchEngine(searchList) {
    const urlC = 'http://localhost:8000/api/logout';
    if ( localStorage.length === 0 ) {
      alert('empty storage');
    } else {
      alert('removed');
    }
    localStorage.removeItem('token');
    this.loggedIn = false;
    return this.http.get(urlC, httpOpt);
  }

}


