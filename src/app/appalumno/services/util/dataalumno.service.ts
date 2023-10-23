import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserrandomService {

  constructor(private http: HttpClient) { }

  getRandomUser(): Observable<any> {
    return this.http.get('https://json-server-1-62r5.onrender.com/api') //json-server --watch api.json ---hots 0.0.0.0 --port 3300
  }                      //https://json-server-1-62r5.onrender.com/api
}
