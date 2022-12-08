import {AfterContentChecked, AfterViewInit, Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../service/auth.service";
import {SignUpForm} from "../model/SignUpForm";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit, AfterViewInit, AfterContentChecked {

  ngAfterContentChecked() {
    console.log(this.form.email);
  }

  onFocus() {
    console.log(this.form.email);
  }

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
    })
  }

}
