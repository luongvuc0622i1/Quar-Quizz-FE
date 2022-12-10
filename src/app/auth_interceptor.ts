import {HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";


// const headers = new HttpHeaders({
//   // 'Content-Type': 'application/json',
//   //   // 'Access-Control-Allow-Origin': 'http://localhost:4200/',
// })

@Injectable()
export class Auth_interceptor implements HttpInterceptor{
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const token = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJtYW5hZ2VyIiwiaWF0IjoxNjcwNjc5OTc5LCJleHAiOjcxMjcwNjc5OTc5fQ.jjjhp89XGoNDwNRYof-dKlpfRYpqDQZW3ekpBosgb98TfLgowyaEFawvfK4wKsHNoSv3encIc_ffJvsS6xv28g';
        // const token = JSON.parse(localStorage.getItem("token")!);
        if(token){
            // let myHeaders= headers.set('Authorization', 'Bearer '+ token);
            req = req.clone({
                setHeaders: {Authorization: 'Bearer '+ token}
            });
        }
        return next.handle(req);
    }
}