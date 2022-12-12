import {Component, OnInit} from '@angular/core';
import {Quiz} from "../../model/quiz";
import {QuizService} from "../../service/quiz.service";
import {resourceChangeTicket} from "@angular/compiler-cli/src/ngtsc/core";
import Swal from "sweetalert2";
import {ActivatedRoute, Router} from "@angular/router";


@Component({
    selector: 'app-list-quiz',
    templateUrl: './list-quiz.component.html',
    styleUrls: ['./list-quiz.component.scss']
})
export class ListQuizComponent implements OnInit {
    quizzes: Quiz[] = [];

    constructor(private quizService: QuizService, private activatedRoute: ActivatedRoute,
                private router: Router) {
    }

    ngOnInit(): void {
        this.getAll();
    }

    ngAfterViewInit() {
        $(document).ready(function () {
            $("#myInput").on("keyup", function () {
                // @ts-ignore
                var value = $(this).val().toLowerCase();
                // @ts-ignore
                $("#myTable tr").filter(function () {
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

    selectedId: any = '';

    private getChild(quiz: Quiz, id: number) {
        // Check if already expanded
        if (this.selectedId == id) {
            this.selectedId = '';
        } else {
            this.selectedId = id;
        }
    }

    deleteQuiz(id) {
        Swal.fire({
            title: 'Delete quiz',
            text: "Are you sure to delete this quiz?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Delete'
        }).then((result) => {
            if (result.isConfirmed) {
                this.quizService.delete(id).subscribe(() => {
                    this.router.navigate(['/manager/quiz/list']);
                    Swal.fire({
                        icon: 'success',
                        title: 'Quiz deleted!',
                        showConfirmButton: false,
                        timer: 1500
                    }).
                    then(() => {
                        location.reload()
                    })
                }, e => {
                    console.log(e);
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Cannot delete quiz!',
                        footer: 'If the quiz is already on a test, it can not be deleted.'
                    })
                });
            }
        })


    }

}
