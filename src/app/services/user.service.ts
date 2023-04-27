import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService
{

  url = 'http://localhost:8000/api/';

  headers = new HttpHeaders();


  constructor( private http: HttpClient )
  {
    /* this.headers = new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem('_jwt')}`
    }); */
  }

  getAll(): Observable<any>
  {
    console.log( `${this.url}users` );
    return this.http.get( `${this.url}users` ); //{ headers: this.headers }
  }

}
