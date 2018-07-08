import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CounterService {
data: any;
  constructor(private http: HttpClient) { }

  getLastCounter(id): Observable<any> {
    //debugger;
    // tslint:disable-next-line:no-trailing-whitespace
    return this.http.get('https://jsonplaceholder.typicode.com/posts/' + id);
  }

}
