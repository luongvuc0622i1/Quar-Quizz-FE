import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {SignUpForm} from "../model/SignUpForm";
import {Observable} from "rxjs";
const API_URL = 'http://localhost:8080'
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  signUp(signUpForm: SignUpForm): Observable<any> {
    return this.http.post(`${API_URL}/register`, signUpForm);
  }

}
