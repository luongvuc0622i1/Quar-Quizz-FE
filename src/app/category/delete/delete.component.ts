import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {CategoryService} from "../service/category.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {Category} from "../inteface/category";
import {data} from "jquery";
declare let swal : any;
@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent implements OnInit {
    categoryFrom : FormGroup;
    category:Category;
    categories : Category[]=[];
    id:number;
    constructor(private categoryService : CategoryService,
                private router : Router,
                private activateRoute : ActivatedRoute) {
        this.activateRoute.paramMap.subscribe((paramMap: ParamMap) =>{
            this.id=+paramMap.get('id');
            this.getCategory(this.id);
        });
    }


  ngOnInit(): void {
       this.getAll();
  }
getAll(){
   this.categoryService.getAll().subscribe(category =>{
       this.categories=category;
   }) ;
}
  getCategory(id:number){
        return this.categoryService.findById(id).subscribe(category =>{
            this.categoryFrom=new FormGroup({
                id :new FormControl(category.id),
                name :new FormControl(category.name),
            });
        });
  }
  h:string;
  deleteCategory(id : number) {
          if (confirm('you want to delete ?')) {
              this.categoryService.delete(id).subscribe(category => {
                  // this.router.navigate(['/category']);
                  console.log(category)
                  alert("OK 😄");
                  this.getAll();
              }, e => {
                  // console.log(e)
                  console.error(e + "👿");
              });
              // swal({
              //     title: "Delete Category",
              //     text : `category : ${this.category.name}`,
              //     icon : "😄",
              // }).then((DeleteCategory)=>{
              //     if(DeleteCategory) {
              //         swal("Delete success", this.even.success)
              //     this.categoryService.delete(id).subscribe(next=>{
              //         this.categories;
              //     })}
              //     else {
              //         swal({
              //             icon : "👿",
              //         }).then((Delete)=>{
              //             if (Delete){
              //                 swal("Delete failure",this.even.error)
              //             }
              //         })
              //     }
              // })
          } else {
              alert("error 👿");
          }
  }
      // even : IDBRequestEventMap
}
