import { Component, OnInit } from '@angular/core';
import {ExamTestDetail} from "../interface/exam-test-detail";
import {ExamTestDetailService} from "../service/exam-test-detail.service";
import Swal from "sweetalert2";
import {Router} from "@angular/router";

@Component({
  selector: 'app-history-list',
  templateUrl: './history-list.component.html',
  styleUrls: ['./history-list.component.scss']
})
export class HistoryListComponent implements OnInit {
     sum:number;
    examTestDetail:ExamTestDetail[];
    examTestDetail1:ExamTestDetail;
    constructor(private examTestDetailService : ExamTestDetailService,private router: Router) { }

    ngOnInit() {
        console.log(this.examTestDetail);
        this.getAll();
    }
    getAll(){
        this.examTestDetailService.getAll().subscribe(examTestDetail =>{
            this.examTestDetail = examTestDetail;
        })
    }
    num(){
        let countQuizzes:number;
      let count: any = this.examTestDetail1.numOfTA;
       let checkQuizzes:any= this.examTestDetail1.examQuizzes.test.quizzes;
       for(let i:number; checkQuizzes.length;i++){
           countQuizzes +=i;
       }
       this.sum = count/countQuizzes*100;
       return this.sum;
    }
    logOut() {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Logout!'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    'Log Out',
                    'Go to Home Page!',
                    'success'
                )
                localStorage.clear();
                this.router.navigate(['home']).then(()=>{
                    location.reload()
                })
            }
        })


    }
}
