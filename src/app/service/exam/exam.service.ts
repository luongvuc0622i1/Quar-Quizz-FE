import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ExamQuiz} from "../../model/exam-quiz";
import {ExamTest} from "../../model/exam-test";

const API_URL=`${environment.apiUrl}`

@Injectable({
  providedIn: 'root'
})
export class ExamService {

  constructor(private http:HttpClient) { }

  saveQuiz(examQuiz: ExamQuiz): Observable<ExamQuiz> {
    return this.http.post<ExamQuiz>(API_URL + `/user/examQuiz/create`, examQuiz);
  }

  saveTest(examTest: ExamTest): Observable<ExamQuiz> {
    return this.http.post<ExamQuiz>(API_URL + `/user/examTest/create`, examTest);
  }
}
