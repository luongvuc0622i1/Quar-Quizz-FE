import { Component, OnInit } from '@angular/core';
import {Test} from "../model/test";
import {TestService} from "../service/test/test.service";
import {ActivatedRoute, ParamMap} from "@angular/router";

@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.scss']
})
export class ExamComponent implements OnInit {
  test: Test;
  id: number = 1;
  panelOpenState = false;
  answers: [];

  //step
  currentTab = 0; // Current tab is set to be the first tab (0)

  constructor(private testService: TestService,
              private activatedRoute: ActivatedRoute) {
    // this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
    //   this.id = +paramMap.get('id');
    // });
  }

  ngOnInit(): void {
    this.testService.findById(this.id).subscribe(test => {
      this.test = test;
      this.answers = test.quizzes[1].answer.split(";");
    });
  }

  splitAnswer(){
    // for (let i=0; i < this.test.quizzes.length; i++) {
    //   this.answers = this.test.quizzes;
    console.log(this.test);
      console.log(this.answers);
    // }
  }

  ngAfterViewInit() {
    var $firstButton = $(".first"),
        $secondButton = $(".second"),
        $input = $("input"),
        $name = $(".name"),
        $more = $(".more"),
        $yourname = $(".yourname"),
        $reset = $(".reset"),
        $ctr = $(".container");

    $firstButton.on("click", function (e) {
      $(this).text("Saving...").delay(900).queue(function () {
        $ctr.addClass("center slider-two-active").removeClass("full slider-one-active");
      });
      e.preventDefault();
    });

    $secondButton.on("click", function (e) {
      $(this).text("Saving...").delay(900).queue(function () {
        $ctr.addClass("full slider-three-active").removeClass("center slider-two-active slider-one-active");
        // @ts-ignore
        $name = $name.val();
        // @ts-ignore
        if ($name == "") {
          $yourname.html("Anonymous!");
        } else {
          $yourname.html($name + "!");
        }
      });
      e.preventDefault();
    });

    this.showTab(0);
  }


  //step

  showTab(n) {
    // This function will display the specified tab of the form ...
    var x = document.getElementsByClassName("tab");
    // @ts-ignore
    x[n].style.display = "block";
    // @ts-ignore
    console.log(x[n]);
    // ... and fix the Previous/Next buttons:
    if (n == 0) {
      document.getElementById("prevBtn").style.display = "none";
    } else {
      document.getElementById("prevBtn").style.display = "inline";
    }
    if (n == (x.length - 1)) {
      document.getElementById("nextBtn").innerHTML = "Submit";
    } else {
      document.getElementById("nextBtn").innerHTML = "Next";
    }
    // ... and run a function that displays the correct step indicator:
    this.fixStepIndicator(n)
  }

  nextPrev(n) {
    // This function will figure out which tab to display
    var x = document.getElementsByClassName("tab");
    // Exit the function if any field in the current tab is invalid:
    // if (n == 1 && !validateForm()) return false;
    // Hide the current tab:

    // @ts-ignore
    console.log(x[this.currentTab])
    // @ts-ignore
    x[this.currentTab].style.display = "none";
    // @ts-ignore
    console.log(x[this.currentTab])
    // Increase or decrease the current tab by 1:
    this.currentTab = this.currentTab + n;
    // if you have reached the end of the form... :
    if (this.currentTab >= x.length) {
      //...the form gets submitted:
      // @ts-ignore
      document.getElementById("regForm").submit();
      return false;
    }
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

  fixStepIndicator(n) {
    // This function removes the "active" class of all steps...
    var i, x = document.getElementsByClassName("step");
    for (i = 0; i < x.length; i++) {
      x[i].className = x[i].className.replace(" active", "");
    }
    //... and adds the "active" class to the current step:
    x[n].className += " active";
  }
}
