import {Level} from "./level";
import {Category} from "./category";

export interface Test {
    id?: number,
    name?: string,
    level?: Level,
    quiz?: any,
    category?: Category[],
    passScore?: number,
    maxTime?: string
}
