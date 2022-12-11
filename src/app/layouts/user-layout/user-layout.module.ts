import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {LbdModule} from '../../lbd/lbd.module';
import {NguiMapModule} from '@ngui/map';

import {UserLayoutRoutes} from './user-layout.routing';

import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatTableModule} from "@angular/material/table";
import {MatExpansionModule} from "@angular/material/expansion";
import {TestComponent} from "../../test/test.component";


@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(UserLayoutRoutes),
        FormsModule,
        LbdModule,
        NguiMapModule.forRoot({apiUrl: 'https://maps.google.com/maps/api/js?key=YOUR_KEY_HERE'}),
        ReactiveFormsModule,
        MatCheckboxModule,
        MatTableModule,
        MatExpansionModule
    ],
    declarations: [
        TestComponent
    ]
})

export class UserLayoutModule {
}