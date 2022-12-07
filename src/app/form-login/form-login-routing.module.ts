import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RegisterComponent} from "./register/register.component";

export const FormLoginRouting: Routes = [
  { path: 'register',      component: RegisterComponent },
]

@NgModule({
  imports: [RouterModule.forChild(FormLoginRouting)],
  exports: [RouterModule]
})
export class FormLoginRoutingModule { }
