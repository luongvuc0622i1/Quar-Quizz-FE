import {Level} from "./level";

export interface Test {
    id?: number,
    name?: string,
    level?: Level,
    quiz?: any,
    category?: any,
    passScore?: number,
    maxTime?: string
}
