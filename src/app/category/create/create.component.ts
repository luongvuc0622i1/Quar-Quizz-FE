import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {CategoryService} from "../service/category.service";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
    categoryForm : FormGroup=new FormGroup({
        id: new FormControl(),
        name :new FormControl()
    });
  constructor( private categoryService : CategoryService) { }

  ngOnInit(): void {
  }
  submit(){
      const  category =this.categoryForm.value;
      this.categoryService.save(category).subscribe(()=>{
          this.categoryForm.reset();
          alert('successful')
      }, e=>{
          console.log(e);
      });
  }
}
