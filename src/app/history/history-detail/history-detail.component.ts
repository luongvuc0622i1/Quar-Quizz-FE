import { Component, OnInit } from '@angular/core';
import {ExamTestDetail} from "../interface/exam-test-detail";
import {ExamTestDetailService} from "../service/exam-test-detail.service";
import {FormControl, FormGroup} from "@angular/forms";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";

@Component({
  selector: 'app-history-detail',
  templateUrl: './history-detail.component.html',
  styleUrls: ['./history-detail.component.scss']
})
export class HistoryDetailComponent implements OnInit {
    examTestDetail:ExamTestDetail[];
    examTestDetail1  :ExamTestDetail;
    examTestDetailFrom : FormGroup;
    constructor(private examTestDetailService : ExamTestDetailService) { }

    ngOnInit() {
        this.getAll();
    }
    getAll(){
        this.examTestDetailService.getAll1().subscribe(examTestDetail =>{
            this.examTestDetail = examTestDetail;
        })
    }
    // id:number;
    // constructor(private examTestDetailService : ExamTestDetailService,
    //             private router : Router,
    //             private activateRouter : ActivatedRoute) {
    //     this.activateRouter.paramMap.subscribe((paramMap : ParamMap)=>{
    //         this.id =+ paramMap.get('id');
    //         this.getExamDetail(this.id);
    //     });
    // }
    // ngOnInit() {
    //     this.getAll();
    //     this.getExamDetailById(this.id);
    // }
    // getAll(){
    //     this.examTestDetailService.getAll1().subscribe(examTest =>{
    //         this.examTestDetail=examTest;
    //     })
    // }
    // getExamDetailById(id:number){
    //     this.examTestDetailService.findById(id).subscribe(examTest =>{
    //         this.examTestDetail1=examTest;
    //     })
    // }
    // getExamDetail(id:number){
    //     return this.examTestDetailService.findById(id).subscribe(examTest =>{
    //         this.examTestDetailFrom =new FormGroup({
    //             id: new FormControl(examTest.id),
    //             appUser :new FormControl(examTest.appUser.username),
    //             examQuizzes:new FormControl(examTest.examQuizzes.test.name),
    //             examQuizzes1:new FormControl(examTest.examQuizzes.test.maxTime),
    //             examQuizzes2:new FormControl(examTest.examQuizzes.test.level.name),
    //             examQuizzes3:new FormControl(examTest.examQuizzes.test.categories.name),
    //             examQuizzes4:new FormControl(examTest.examQuizzes.quiz.level.name),
    //             examQuizzes5:new FormControl(examTest.examQuizzes.test.quizzes.name),
    //             examQuizzes6:new FormControl(examTest.examQuizzes.answerUser),
    //             examQuizzes7:new FormControl(examTest.examQuizzes.test.passScore),
    //             numOfTA :new FormControl(examTest.numOfTA),
    //         })
    //     })
    // }
}
