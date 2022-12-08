import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LbdModule } from '../../lbd/lbd.module';
import { NguiMapModule} from '@ngui/map';

import { ManagerLayoutRoutes } from './manager-layout.routing';

import { HomeComponent } from '../../home/home.component';
import { UserComponent } from '../../user/user.component';
import {QuizComponent} from "../../quiz/quiz.component";
import { TablesComponent } from '../../tables/tables.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import {ListTestComponent} from "../../tests/crud/list-test/list-test.component";
import {CreateTestComponent} from "../../tests/crud/create-test/create-test.component";
import {ListComponent} from "../../category/list/list.component";
import {CreateComponent} from "../../category/create/create.component";


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ManagerLayoutRoutes),
    FormsModule,
    LbdModule,
    NguiMapModule.forRoot({apiUrl: 'https://maps.google.com/maps/api/js?key=YOUR_KEY_HERE'}),
    ReactiveFormsModule
  ],
  declarations: [
    HomeComponent,
    UserComponent,
    QuizComponent,
      ListComponent,
      CreateComponent,
    ListTestComponent,
    CreateTestComponent,
    TablesComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent
  ]
})

export class ManagerLayoutModule {}
