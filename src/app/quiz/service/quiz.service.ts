import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Level} from "../model/level";
import {Quiz} from "../model/quiz";
import {Category} from "../model/category";
import {TypeQuizzes} from "../model/typequizzes";

// const API_URL=`${environment.apiUrl}`
const API_URL = `http://localhost:8080`

@Injectable({
    providedIn: 'root'
})
export class QuizService {

    constructor(private http: HttpClient) {
    }

    getAll(): Observable<Quiz[]> {
        return this.http.get<Quiz[]>(API_URL + '/quizzes');
    }

    findById(id: number) {
        return this.http.get<Quiz>(`${API_URL}/quizzes/${id}`);
    }

    save(quiz: Quiz): Observable<Quiz> {
        return this.http.post<Quiz>(API_URL + `/quizzes`, quiz);
    }

    update(id: number, Quiz: Quiz): Observable<Quiz> {
        return this.http.put<Quiz>(`${API_URL}/quizzes/${id}`, Quiz);
    }

    delete(id: number): Observable<Quiz> {
        return this.http.delete<Quiz>(`${API_URL}/quizzes/${id}`);
    }

    getLevels(): Observable<Level[]> {
        return this.http.get<Level[]>(API_URL + '/quizzes/level');
    }

    getTypeQuizzes(): Observable<TypeQuizzes[]> {
        return this.http.get<TypeQuizzes[]>(API_URL + '/quizzes/type');
    }

    getCategories(): Observable<Category[]> {
        return this.http.get<Category[]>(API_URL + '/category');
    }

    change(quiz: any) {
        let id;
        let arCategory = [];
        let arLevel;
        let arTypeQuizzes;
        let quiz1;
        for (let i = 0; i < quiz.category.length; i++) {
            id = quiz.category[i];
            arCategory.push({id});
        }
        for (let i = 0; i < quiz.typeQuizzes.length; i++) {
            id = quiz.typeQuizzes[i];
            arTypeQuizzes = {id};
        }
        for (let i = 0; i < quiz.level.length; i++) {
            id = quiz.level[i];
            arLevel = {id};
        }
        quiz1 = {
            answer: quiz.answer,
            correct_answer: quiz.correct_answer,
            name: quiz.name,
            typeQuizzes: arTypeQuizzes,
            level: arLevel,
            category: arCategory
        }
        return quiz1;
    }
}
