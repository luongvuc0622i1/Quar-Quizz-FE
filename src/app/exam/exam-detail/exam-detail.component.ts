import { Component, OnInit } from '@angular/core';
import {Test} from "../../model/test";
import {TestService} from "../../service/test/test.service";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {ExamService} from "../../service/exam/exam.service";
import {ExamQuiz} from "../../model/exam-quiz";
import Swal from "sweetalert2";

@Component({
  selector: 'app-exam-detail',
  templateUrl: './exam-detail.component.html',
  styleUrls: ['./exam-detail.component.scss']
})
export class ExamDetailComponent implements OnInit {
  test: Test;
  answerUserAr: number[] = [];
  answerUser: String;
  id: number; //id_test
  id_user: number;
  id_quiz: number;
  examQuiz: ExamQuiz;

  //step
  currentTab = 0; // Current tab is set to be the first tab (0)

  constructor(private testService: TestService,
              private examService: ExamService,
              private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
    });
  }

  ngOnInit(): void {
    this.testService.findById(this.id).subscribe(test => {
      this.test = test;
    });
  }

  ngAfterViewInit() {
    this.showTab(0);
  }

  //step

  showTab(n) {
    // This function will display the specified tab of the form ...
    var x = document.getElementsByClassName("tab");
    // @ts-ignore
    x[n].style.display = "block";
    // ... and fix the Previous/Next buttons:
    if (n == 0) {
      document.getElementById("prevBtn").style.display = "none";
    } else {
      document.getElementById("prevBtn").style.display = "inline";
    }
    if (n == (x.length - 1)) {
      document.getElementById("nextBtn").style.display = "none";
    } else {
      document.getElementById("nextBtn").style.display = "inline";
    }
    // ... and run a function that displays the correct step indicator:
    // this.fixStepIndicator(n)
  }

  nextPrev(n) {
    // This function will figure out which tab to display
    var x = document.getElementsByClassName("tab");
    // Exit the function if any field in the current tab is invalid:
    // if (n == 1 && !validateForm()) return false;
    // Hide the current tab:

    // @ts-ignore
    x[this.currentTab].style.display = "none";
    // Increase or decrease the current tab by 1:
    this.currentTab = this.currentTab + n;
    // Otherwise, display the correct tab:
    this.showTab(this.currentTab);
  }

  validateForm() {
    // This function deals with validation of the form fields
    var x, y, i, valid = true;
    x = document.getElementsByClassName("tab");
    y = x[this.currentTab].getElementsByTagName("input");
    // A loop that checks every input field in the current tab:
    for (i = 0; i < y.length; i++) {
      // If a field is empty...
      if (y[i].value == "") {
        // add an "invalid" class to the field:
        y[i].className += " invalid";
        // and set the current valid status to false:
        valid = false;
      }
    }
    // If the valid status is true, mark the step as finished and valid:
    if (valid) {
      document.getElementsByClassName("step")[this.currentTab].className += " finish";
    }
    return valid; // return the valid status
  }

  // fixStepIndicator(n) {
  //   // This function removes the "active" class of all steps...
  //   var i, x = document.getElementsByClassName("step");
  //   for (i = 0; i < x.length; i++) {
  //     x[i].className = x[i].className.replace(" active", "");
  //   }
  //   //... and adds the "active" class to the current step:
  //   x[n].className += " active";
  // }

  click(value: number) {
    this.answerUserAr = [];
    this.answerUserAr.push(value);
    this.answerUser = this.answerUserAr.join(';');
    this.id_user = Number(localStorage.getItem('ID_KEY'));
    this.examQuiz = {
      "quiz":
          {
            "id":3
          },
      "test":
          {
            "id":this.id
          },
      "answerUser":this.answerUser,
      // @ts-ignore
      appUser: {"id":this.id_user}
    }
  }

  send() {
    this.examService.save(this.examQuiz).subscribe(() =>{
      // this.testForm.reset();
      console.log('Create done!');
    }, error => {
      console.log(error)
    });
  }
}
