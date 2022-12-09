import {Component, OnInit} from '@angular/core';
import {Quiz} from "../../model/quiz";
import {QuizService} from "../../service/quiz.service";
import {Level} from "../../../quiz/model/level";
import {Category} from "../../../quiz/model/category";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {TypeQuizzes} from "../../model/typequizzes";

declare var $:any;
@Component({
    selector: 'app-create-quiz',
    templateUrl: './create-quiz.component.html',
    styleUrls: ['./create-quiz.component.scss']
})
export class CreateQuizComponent implements OnInit {
    answers:string ="";
    correct_answers:string ="";
    names :string="";
    levels: Level[] = [];
    typeQuizzes:TypeQuizzes[]=[];
    categories: Category[] = [];
    categoriesChoice: Category[] = [];

    constructor(private quizService: QuizService) { }

    ngOnInit():void {
        this.getAll();
    }

    quizForm: FormGroup = new FormGroup({
        name: new FormControl("", [Validators.required]),
        answer: new FormControl("", [Validators.required]),
        correct_answer: new FormControl("", [Validators.required]),
        level: new FormControl("", [Validators.required]),
        typeQuiz: new FormControl("", [Validators.required])
    })

    get name(){
        return this.quizForm.get('name')
    }
    get answer(){
        return this.quizForm.get('answer')
    }
    get correctAnswer(){
        return this.quizForm.get('correct_answer')
    }
    get level(){
        return this.quizForm.get('level')
    }
    get typeQuiz(){
        return this.quizForm.get('typeQuiz')
    }

    submit(){
        const quiz= this.quizForm.value;
        console.log(quiz);
        const quiz1 = this.change(quiz);
        console.log(quiz);
        this.quizService.save(quiz1).subscribe(() =>{
            this.quizForm.reset();
            this.showNotification('top','center')
        }, error => {
            console.log(error)
        });
    }

    getAll() {
        this.quizService.getLevels().subscribe(levelList => {
            this.levels = levelList;
            console.log(this.levels)
        });
        this.quizService.getTypeQuizzes().subscribe(typeQuizzesList => {
            this.typeQuizzes = typeQuizzesList;
        });
        this.quizService.getCategories().subscribe(categoryList => {
            this.categories = categoryList;
        });
    }

    change(quiz: any) {
        let id;
        let arCategory = [];
        let arLevel;
        let arTypeQuizzes;
        let quiz1;
        for (let i = 0; i < quiz.category.length; i++) {
            id = quiz.category[i];
            arCategory.push({id});
        }
        for (let i = 0; i < quiz.typeQuizzes.length; i++) {
            id = quiz.typeQuizzes[i];
            arTypeQuizzes = {id};
        }
        for (let i = 0; i < quiz.level.length; i++) {
            id = quiz.level[i];
            arLevel = {id};
        }
        quiz1 = {
            answer: quiz.answer,
            correct_answer: quiz.correct_answer,
            name: quiz.name,
            typeQuizzes: arTypeQuizzes,
            level: arLevel,
            category: arCategory
        }
        return quiz1;
    }

    choiceCategory(value: any) {
        console.log(value);
        this.categoriesChoice.push(value);
    }

    showNotification(from, align){
        // const type = ['','info','success','warning','danger'];
        //
        // var color = Math.floor((Math.random() * 4) + 1);
        $.notify({
            icon: "pe-7s-check",
            message: "Create new quiz successfully!"
        },{
            type: 'success',
            timer: 1000,
            placement: {
                from: from,
                align: align
            }
        });
    }
}
