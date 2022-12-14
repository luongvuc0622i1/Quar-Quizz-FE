import { Component, OnInit } from '@angular/core';
import {ExamQuizService} from "../model/exam-quiz.service";
import {ExamQuiz} from "../interface/exam-quiz";

@Component({
  selector: 'app-exam-quiz-detail',
  templateUrl: './exam-quiz-detail.component.html',
  styleUrls: ['./exam-quiz-detail.component.scss']
})
export class ExamQuizDetailComponent implements OnInit {

    examQuizDetail:ExamQuiz[];
    constructor(private examQuizDetailService : ExamQuizService) { }

    ngOnInit() {
        this.getAll();
    }
    getAll(){
        this.examQuizDetailService.getAll().subscribe(examTestDetail =>{
            this.examQuizDetail = examTestDetail;
        })
    }

}
