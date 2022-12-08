import {Component, OnInit} from '@angular/core';
import {Quiz} from "../../model/quiz";
import {QuizService} from "../../service/quiz.service";

@Component({
    selector: 'app-create-quiz',
    templateUrl: './create-quiz.component.html',
    styleUrls: ['./create-quiz.component.scss']
})
export class CreateQuizComponent implements OnInit {
    quizzes: Quiz[] = [];

    constructor(private quizService: QuizService) {
    }

    ngOnInit(): void {
        this.getAll();
    }

    getAll() {
        this.quizService.getAll().subscribe(quizList => {
            this.quizzes = quizList;
        });
    }

}
