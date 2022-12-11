import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../../model/user";

const API_URL=`${environment.apiUrl}`
const id = localStorage.getItem("ID_KEY");

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) {
  }

  findById() {
    return this.http.get<User>(`${API_URL}/users/${id}`);
  }

  update(user: any): Observable<User> {
    return this.http.put<User>(`${API_URL}/changePassword/${id}`, user);
  }
}
