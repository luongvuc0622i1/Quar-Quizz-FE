import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Category} from "../inteface/category";
const API_URL=`${environment.apiUrl}`;
@Injectable({
  providedIn: 'root'
})
export class CategoryService {

    constructor(private http : HttpClient) { }
    getAll(): Observable<Category[]>{
        return this.http.get<Category[]>(API_URL+'/category');
    }
    save(category:any):Observable<Category>{
        return this.http.post<Category>(API_URL +'/category',category);
    }
    findById(id:number):Observable<Category>{
        return this.http.get<Category>(`${API_URL}/category/${id}`);
    }
    delete(id:number):Observable<Category>{
        return this.http.delete<Category>(`${API_URL}/category/${id}`);
    }
}
