import { Component, OnInit } from '@angular/core';
import {Quiz} from "../../model/quiz";
import {QuizService} from "../../service/quiz.service";
import {resourceChangeTicket} from "@angular/compiler-cli/src/ngtsc/core";


@Component({
  selector: 'app-list-quiz',
  templateUrl: './list-quiz.component.html',
  styleUrls: ['./list-quiz.component.scss']
})
export class ListQuizComponent implements OnInit {
  quizzes: Quiz[] =[];

  constructor(private quizService: QuizService) {
  }

  ngOnInit(): void {
    this.getAll();
  }
  ngAfterViewInit(){
    $(document).ready(function(){
      $("#myInput").on("keyup", function() {
        // @ts-ignore
        var value = $(this).val().toLowerCase();
        // @ts-ignore
        $("#myTable tr").filter(function() {
          $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
      });
    });
  };


  getAll() {
    this.quizService.getAll().subscribe(quizList => {
    this.quizzes = quizList;
    });
  }

  selectedId : any = '';

  private getChild(quiz: Quiz, id: number) {
    // Check if already expanded
    if(this.selectedId == id){
      this.selectedId = '';
    }else{
      this.selectedId = id;
    }
  }

}
