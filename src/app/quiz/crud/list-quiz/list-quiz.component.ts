import { Component, OnInit } from '@angular/core';
import {Quiz} from "../../model/quiz";
import {QuizService} from "../../service/quiz.service";
import {MatTableDataSource} from "@angular/material/table";

let quizzes: Quiz[];
@Component({
  selector: 'app-list-quiz',
  templateUrl: './list-quiz.component.html',
  styleUrls: ['./list-quiz.component.scss']
})
export class ListQuizComponent implements OnInit {


  constructor(private quizService: QuizService) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.quizService.getAll().subscribe(quizList => {
    quizzes = quizList;
    });
  }
  displayedColumns: string[] = ['id', 'name', 'typeQuizzes', 'level','category'];
  dataSource = new MatTableDataSource(quizzes);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
