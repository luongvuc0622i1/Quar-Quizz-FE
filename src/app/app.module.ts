import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app.routing';
import { NavbarModule } from './shared/navbar/navbar.module';
import { FooterModule } from './shared/footer/footer.module';
import { SidebarModule } from './sidebar/sidebar.module';

import { AppComponent } from './app.component';
import {ManagerLayoutComponent} from "./layouts/manager-layout/manager-layout.component";
import { FormLoginComponent } from './form-login/form-login.component';
import {MatIconModule} from "@angular/material/icon";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatCardModule} from "@angular/material/card";
import {MatRadioModule} from "@angular/material/radio";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatButtonModule} from "@angular/material/button";
import {Auth_interceptor} from "./auth_interceptor";

@NgModule({
    imports: [
        BrowserAnimationsModule,
        FormsModule,
        RouterModule,
        HttpClientModule,
        NavbarModule,
        FooterModule,
        SidebarModule,
        AppRoutingModule,
    ],
    declarations: [
        AppComponent,
        ManagerLayoutComponent,
        FormLoginComponent
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: Auth_interceptor, multi: true
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }