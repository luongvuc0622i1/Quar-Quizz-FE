import {AfterViewInit, Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit, AfterViewInit {

  hide = true;

  form: any = {};

  // registerForm: FormGroup = new FormGroup({
  //   username: new FormControl("", [Validators.required]),
  //   email: new FormControl("", [Validators.required, Validators.email]),
  //   password: new FormControl("", [Validators.required, Validators.minLength(6), Validators.pattern("^([A-Z]{1})([a-z]{4,})")]),
  //   confirmPassword: new FormControl("", [Validators.required])
  // })

  message: string;

  constructor() { }

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


}
