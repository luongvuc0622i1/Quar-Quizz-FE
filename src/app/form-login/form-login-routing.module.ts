import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RegisterComponent} from "./register/register.component";
import {UserComponent} from "../user/user.component";

export const FormLoginRouting: Routes = [
  { path: 'profile',       component: UserComponent},
  { path: 'register',      component: RegisterComponent },

]

@NgModule({
  imports: [RouterModule.forChild(FormLoginRouting)],
  exports: [RouterModule]
})
export class FormLoginRoutingModule { }
