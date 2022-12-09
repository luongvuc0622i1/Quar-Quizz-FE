export class JwtResponse {
    id: number;
    username: string;
    token: string;
    roleSet: any[];


    constructor(id: number, username: string, token: string, roleSet: any[]) {
        this.id = id;
        this.username = username;
        this.token = token;
        this.roleSet = roleSet;
    }

}