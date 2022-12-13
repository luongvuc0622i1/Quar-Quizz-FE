import { Component, OnInit } from '@angular/core';
import {Test} from "../../model/test";
import {TestService} from "../../service/test/test.service";
import {ExamService} from "../../service/exam/exam.service";

@Component({
  selector: 'app-exam-list',
  templateUrl: './exam-list.component.html',
  styleUrls: ['./exam-list.component.scss']
})
export class ExamListComponent implements OnInit {
  tests: Test[] = [];

  //step


  constructor(private testService: TestService,
              private examService: ExamService) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.testService.getAll().subscribe(testList => {
      this.tests = testList;
    });
  }
}