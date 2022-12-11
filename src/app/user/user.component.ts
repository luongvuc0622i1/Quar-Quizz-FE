import { Component, OnInit } from '@angular/core';
import {UserService} from "../service/user/user.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {matchValidator} from "../service/form-validators";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user : any;
  password : any;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getAll();
  }

  changePasswordForm: FormGroup = new FormGroup({
    curPass: new FormControl("", [Validators.required, Validators.pattern('^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,}$')]),
    newPass: new FormControl("", [Validators.required, Validators.pattern('^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,}$')]),
    rePass: new FormControl("", [Validators.required, Validators.pattern('^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,}$'), matchValidator('newPass')]),
  })

  get curPass(){
    return this.changePasswordForm.get('curPass')
  }
  get newPass(){
    return this.changePasswordForm.get('newPass')
  }
  get rePass(){
    return this.changePasswordForm.get('rePass')
  }

  submit(){
    const test= this.changePasswordForm.value;
    console.log(test);
    const test1 = {
      "oldPassword": test.curPass,
      "newPassword": test.newPass
    };
    console.log(test1);
    this.userService.update(test1).subscribe(() =>{
      this.changePasswordForm.reset();
      alert('Update done!');
    }, error => {
      alert('Current Password is fault!');
    });
  }

  getAll() {
    this.userService.findById().subscribe(user => {
      this.user = user;
      console.log(user);
      this.password = user.password;
    });
  }

  myFunction1() {
    var x = document.getElementById("inputCur");
    this.change(x);
  }

  myFunction2() {
    var x = document.getElementById("inputNew");
    this.change(x);
  }

  myFunction3() {
    var x = document.getElementById("inputRe");
    this.change(x);
  }

  change(x) {
    // @ts-ignore
    if (x.type === "password") {
      // @ts-ignore
      x.type = "text";
    } else {
      // @ts-ignore
      x.type = "password";
    }
  }
}
