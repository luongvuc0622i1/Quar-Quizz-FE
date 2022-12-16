import { Component, OnInit } from '@angular/core';
import {ExamTestDetail} from "../interface/exam-test-detail";
import {ExamTestDetailService} from "../service/exam-test-detail.service";

@Component({
  selector: 'app-history-list',
  templateUrl: './history-list.component.html',
  styleUrls: ['./history-list.component.scss']
})
export class HistoryListComponent implements OnInit {
     sum:number;
    examTestDetail:ExamTestDetail[];
    examTestDetail1:ExamTestDetail;
    constructor(private examTestDetailService : ExamTestDetailService) { }

    ngOnInit() {
        console.log(this.examTestDetail);
        this.getAll();
    }
    getAll(){
        this.examTestDetailService.getAll().subscribe(examTestDetail =>{
            this.examTestDetail = examTestDetail;
        })
    }
    num(TA){
    }

}
