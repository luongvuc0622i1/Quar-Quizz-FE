import {AfterContentChecked, AfterViewInit, Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../service/auth.service";
import {SignUpForm} from "../model/SignUpForm";
// import swal from "sweetalert";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit, AfterViewInit {

  status = 'Please fill in the form to create account!'

  hide = true;

  form: any = {};

  signUpForm: SignUpForm;

  message: string;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    const signUpButton = document.getElementById('signUp');
    const signInButton = document.getElementById('signIn');
    const container = document.getElementById('container');

    signUpButton.addEventListener('click', () => {
      container.classList.add("right-panel-active");
    });

    signInButton.addEventListener('click', () => {
      container.classList.remove("right-panel-active");
    });
  }

  get username() {
    return this.form.get("username");
  }

  get email() {
    return this.form.get("email");
  }

  get password() {
    return this.form.get("password");
  }

  get confirmPassword() {
    return this.form.get('confirmPassword');
  }

  mailFormControl = new FormControl('', [
      Validators.email,
      Validators.required
      ]);

  confirmPasswordFormControl = new FormControl('', [
      Validators.required
  ])

  register() {
    this.signUpForm = new SignUpForm(
        this.form.username,
        this.form.email,
        this.form.password
    );

    this.authService.signUp(this.signUpForm).subscribe(data => {
      console.log('data ---> ', data);
      if (data != null) {
        this.status = 'Register Success!';
        return;
      }
    }, we => {
          console.log('we ---> ', we);
          console.log('message --->', we.error.message);
          if (we.error.message === 'nouser') {
            this.status = 'Username is existed! Please try again!';
            return;
          } else if (we.error.message === 'noemail') {
            this.status = 'Email is existed! Please try again!';
            return;
          } else {
            this.status = 'Mail invalid! Please try again!';
          }
        }
      //       error => {
      // console.log('error ---> ', error);
      // if (error.we.error.message === 'nouser') {
      //   console.log('message:', error.we.error.message);
      //   // this.status = 'Username is existed! Please try again!';
      // }
    )



  }



}
