import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

import { User } from '../models/car';
import { BASE_URL } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class CarService {


  constructor(private http: HttpClient) { }


  create(user: User): Observable<User>{
    return this.http.post<User>(`${BASE_URL}produtos`, user)
  }


}