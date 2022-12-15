import {Test} from "../../model/test";
import {Quiz} from "../../quiz/model/quiz";

export interface ExamQuiz {
    id:number;
    quiz:Quiz;
    test:Test;
    answerUser:string;
    status : number;
}
