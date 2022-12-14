import {Quiz} from "../../model/quiz";
import {Test} from "../../model/test";

export interface ExamQuiz {
    id:number;
    quiz:Quiz;
    test:Test;
    answerUser:string;
}
