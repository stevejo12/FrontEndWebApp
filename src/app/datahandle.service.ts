import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOpt = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};

@Injectable()
export class DatahandleService { headers = new Headers();
  constructor(private http: HttpClient) {
  }
  token = localStorage.token;


  private loggedIn: boolean;

  checkSignIn(formData) {
    this.headers.append('Content-Type', 'application/json');
    const urlA = 'http://localhost:8000/api/login';
    localStorage.setItem('token', 'formData');
    return this.http.post(urlA, formData);
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
    localStorage.removeItem('token');
    this.loggedIn = false;
    return this.http.get(urlC, httpOpt);
  }

}


