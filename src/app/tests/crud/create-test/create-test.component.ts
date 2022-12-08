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
  quizzesChoice: Quiz[] = [];
  categories: Category[] = [];
  categoriesChoice: Category[] = [];
  limit: number = 0;

  constructor(private testService: TestService) { }

  ngOnInit(): void {
    this.getAll();
  }

  testForm: FormGroup = new FormGroup({
    name: new FormControl(),
    level: new FormControl(),
    category: new FormControl(),
    passScore: new FormControl(),
    maxTime: new FormControl(),
  })

  submit(){
    const test= this.testForm.value;
    console.log(test);
    const test1 = this.change(test);
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

  change(test: any) {
    let id;
    let arCategory = [];
    let arLevel;
    let arQuiz= [];
    let test1;
    for (let i = 0; i < this.categoriesChoice.length; i++) {
      id = this.categoriesChoice[i].id;
      arCategory.push({id});
    }
    for (let i = 0; i < this.quizzesChoice.length; i++) {
      id = this.quizzesChoice[i].id;
      arQuiz.push({id});
    }
    for (let i = 0; i < test.level.length; i++) {
      id = test.level[i];
      arLevel = {id};
    }
    test1 = {name:test.name, level:arLevel, quizzes:arQuiz, passScore:test.passScore, categories:arCategory, maxTime:test.maxTime};
    return test1;
  }

  choose(quiz: any) {
    if (this.quizzesChoice.length <= this.limit-1) {
      this.quizzesChoice.push(quiz);
    }
  }

  inputNOQ(value: number) {
    this.limit = value;
  }

  choiceCategory(value: any) {
    console.log(value);
    this.categoriesChoice.push(value);
  }
}
