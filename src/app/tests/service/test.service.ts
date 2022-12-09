import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Test} from "../model/test";
import {Observable} from "rxjs";
import {Level} from "../model/level";
import {Quiz} from "../model/quiz";
import {Category} from "../model/category";

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

  findById(id: number): Observable<Test> {
    return this.http.get<Test>(`${API_URL}/tests/${id}`);
  }

  save(test: Test): Observable<Test> {
    return this.http.post<Test>(API_URL + `/tests`, test);
  }

  getLevels(): Observable<Level[]> {
    return this.http.get<Level[]>(API_URL + '/levels');
  }

  getQuizzes(): Observable<Quiz[]> {
    return this.http.get<Quiz[]>(API_URL + '/quizzes');
  }

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(API_URL + '/category');
  }
}
