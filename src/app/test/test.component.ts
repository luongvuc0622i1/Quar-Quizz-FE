import { Component, OnInit } from '@angular/core';
import {TestService} from "./service/test.service";
import {Test} from "./model/test";

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  tests: Test[] = [];

  constructor(private testService: TestService) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.testService.getAll().subscribe(testList => {
      this.tests = testList;
    });
  }
}
