import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {LbdModule} from '../../lbd/lbd.module';
import {NguiMapModule} from '@ngui/map';

import {ManagerLayoutRoutes} from './manager-layout.routing';

import {HomeComponent} from '../../home/home.component';
import {UserComponent} from '../../user/user.component';
import {TablesComponent} from '../../tables/tables.component';
import {TypographyComponent} from '../../typography/typography.component';
import {IconsComponent} from '../../icons/icons.component';
import {MapsComponent} from '../../maps/maps.component';
import {NotificationsComponent} from '../../notifications/notifications.component';
import {ListTestComponent} from "../../tests/crud/list-test/list-test.component";
import {CreateTestComponent} from "../../tests/crud/create-test/create-test.component";
import {ListComponent} from "../../category/list/list.component";
import {CreateComponent} from "../../category/create/create.component";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {ListQuizComponent} from "../../quiz/crud/list-quiz/list-quiz.component";
import {UpdateQuizComponent} from "../../quiz/crud/update-quiz/update-quiz.component";
import {CreateQuizComponent} from "../../quiz/crud/create-quiz/create-quiz.component";
import {MatTableModule} from "@angular/material/table";
import {DetailTestComponent} from "../../tests/crud/detail-test/detail-test.component";
import {DeleteComponent} from "../../category/delete/delete.component";


@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(ManagerLayoutRoutes),
        FormsModule,
        LbdModule,
        NguiMapModule.forRoot({apiUrl: 'https://maps.google.com/maps/api/js?key=YOUR_KEY_HERE'}),
        ReactiveFormsModule,
        MatCheckboxModule,
        MatTableModule
    ],
    declarations: [
        HomeComponent,
        UserComponent,
        ListQuizComponent,
        UpdateQuizComponent,
        CreateQuizComponent,
        ListComponent,
        CreateComponent,
        DeleteComponent,
        ListTestComponent,
        DetailTestComponent,
        CreateTestComponent,
        TablesComponent,
        TypographyComponent,
        IconsComponent,
        MapsComponent,
        NotificationsComponent
    ]
})

export class ManagerLayoutModule {
}
