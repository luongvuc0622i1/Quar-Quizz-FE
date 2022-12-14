import { Component, OnInit } from '@angular/core';
import {ExamTestDetail} from "../interface/exam-test-detail";
import {ExamTestDetailService} from "../service/exam-test-detail.service";

@Component({
  selector: 'app-history-detail',
  templateUrl: './history-detail.component.html',
  styleUrls: ['./history-detail.component.scss']
})
export class HistoryDetailComponent implements OnInit {
    examTestDetail:ExamTestDetail[];
    examTestDetail1  :ExamTestDetail;
    constructor(private examTestDetailService : ExamTestDetailService) { }

    ngOnInit() {
        this.getAll();
    }
    getAll(){
        this.examTestDetailService.getAll1().subscribe(examTestDetail =>{
            this.examTestDetail = examTestDetail;
        })
    }
}
