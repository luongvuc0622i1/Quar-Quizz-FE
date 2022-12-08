import { Component, OnInit } from '@angular/core';
import {TestService} from "../../service/test.service";
import {FormControl, FormGroup} from "@angular/forms";
import {Test} from "../../model/test";
import {Level} from "../../model/level";
import {Quiz} from "../../model/quiz";
import {Category} from "../../model/category";

@Component({
  selector: 'app-create-test',
  templateUrl: './create-test.component.html',
  styleUrls: ['./create-test.component.scss']
})
export class CreateTestComponent implements OnInit {
  levels: Level[] = [];
  quizzes: Quiz[] = [];
  categories: Category[] = [];

  constructor(private testService: TestService) { }

  ngOnInit(): void {
    this.getAll();
  }

  testForm: FormGroup = new FormGroup({
    name: new FormControl(),
    level: new FormControl(),
    quiz: new FormControl(),
    category: new FormControl(),
    passScore: new FormControl(),
    maxTime: new FormControl(),
  })

  submit(){
    const test= this.testForm.value;
    console.log(test);
    const test1 = this.testService.change(test);
    console.log(test1);
    this.testService.save(test1).subscribe(() =>{
      this.testForm.reset();
      alert('Create done!');
    }, error => {
      console.log(error)
    });
  }

  getAll() {
    this.testService.getLevels().subscribe(levelList => {
      this.levels = levelList;
    });
    this.testService.getQuizzes().subscribe(quizList => {
      this.quizzes = quizList;
    });
    this.testService.getCategories().subscribe(categoryList => {
      this.categories = categoryList;
    });
  }
}
