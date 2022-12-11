import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import {ManagerLayoutComponent} from "./layouts/manager-layout/manager-layout.component";
import {FormLoginComponent} from "./form-login/form-login.component";

const routes: Routes =[
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  }, {
    path: 'manager',
    component: ManagerLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./layouts/manager-layout/manager-layout.module').then(x => x.ManagerLayoutModule)
      }]},
  {
    path: 'account',
    component: FormLoginComponent,
    // children: [
    //   {
    //     path: '',
    //     loadChildren: () => import('./form-login/form-login.module').then(x => x.FormLoginModule)
    //   }]
  },
  {
    path: '**',
    redirectTo: 'dashboard'
  }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
      useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
