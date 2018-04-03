import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOpt = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};

@Injectable()
export class DatahandleService { headers = new Headers();
  constructor(private http: HttpClient) {
  }

  checkSignIn(formData) {
    this.headers.append('Content-Type', 'application/json');
    const url = 'http:/localhost:8000/api/login';
    return this.http.post(url, formData);
  }
}


