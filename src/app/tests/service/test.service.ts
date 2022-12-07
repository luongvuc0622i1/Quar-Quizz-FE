import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Test} from "../model/test";
import {Observable} from "rxjs";

// const API_URL=`${environment.apiUrl}`
const API_URL=`http://localhost:8080`

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private http:HttpClient) {
  }

  getAll(): Observable<Test[]> {
    return this.http.get<Test[]>(API_URL + '/tests');
  }

  findById(id: number) {
    return this.http.get<Test>(`${API_URL}/tests/${id}`);
  }

  save(test: Test): Observable<Test> {
    return this.http.post<Test>(API_URL + `/tests`, test);
  }
}
