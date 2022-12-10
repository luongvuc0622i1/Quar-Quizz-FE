import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RegisterComponent} from "./register/register.component";
import {UserComponent} from "../user/user.component";
import {ManagerLayoutComponent} from "../layouts/manager-layout/manager-layout.component";

export const FormLoginRouting: Routes = [
  { path: 'profile',       component: UserComponent},
  { path: 'register',      component: RegisterComponent },
  { path: '#',
    component: ManagerLayoutComponent,
    children: [
  {
    path: 'manager',
    loadChildren: () => import('../layouts/manager-layout/manager-layout.module').then(x => x.ManagerLayoutModule)
  }]}
]

@NgModule({
  imports: [RouterModule.forChild(FormLoginRouting)],
  exports: [RouterModule]
})
export class FormLoginRoutingModule { }
