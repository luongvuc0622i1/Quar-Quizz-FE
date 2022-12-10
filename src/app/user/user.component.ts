import { Component, OnInit } from '@angular/core';
import {UserService} from "../service/user/user.service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user : any;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.userService.findById(2).subscribe(user => {
      this.user = user;
      console.log(user);
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
