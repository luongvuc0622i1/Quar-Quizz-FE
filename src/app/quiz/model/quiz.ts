import {Level} from "./level";
import {Category} from "./category";
import {TypeQuizzes} from "./typequizzes";


export interface Quiz {
    id?: number,
    answer?:string;
    correct_answer?:string;
    name?:string;
    typeQuizzes?:TypeQuizzes;
    level?: Level;
    category?: Category[]
}
