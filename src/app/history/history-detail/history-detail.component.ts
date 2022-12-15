import { Component, OnInit } from '@angular/core';
import {ExamTestDetail} from "../interface/exam-test-detail";
import {ExamTestDetailService} from "../service/exam-test-detail.service";
import Swal from "sweetalert2";
import {Router} from "@angular/router";

@Component({
  selector: 'app-history-detail',
  templateUrl: './history-detail.component.html',
  styleUrls: ['./history-detail.component.scss']
})
export class HistoryDetailComponent implements OnInit {
    examTestDetail:ExamTestDetail[];
    examTestDetail1  :ExamTestDetail;
    constructor(private examTestDetailService : ExamTestDetailService,private router: Router) { }

    ngOnInit() {
        this.getAll();
    }
    getAll(){
        this.examTestDetailService.getAll1().subscribe(examTestDetail =>{
            this.examTestDetail = examTestDetail;
        })
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
