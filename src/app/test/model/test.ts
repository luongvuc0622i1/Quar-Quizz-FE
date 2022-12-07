import {Level} from "./level";

export interface Test {
    id?: number,
    name?: string,
    level?: Level,
    passScore?: number,
    maxTime?: string
}
