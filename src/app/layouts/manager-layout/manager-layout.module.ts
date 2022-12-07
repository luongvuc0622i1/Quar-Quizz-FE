import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LbdModule } from '../../lbd/lbd.module';
import { NguiMapModule} from '@ngui/map';

import { ManagerLayoutRoutes } from './manager-layout.routing';

import { HomeComponent } from '../../home/home.component';
import { UserComponent } from '../../user/user.component';
import {CategoryComponent} from "../../category/category.component";
import {QuizComponent} from "../../quiz/quiz.component";
import { TablesComponent } from '../../tables/tables.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import {ListTestComponent} from "../../tests/crud/list-test/list-test.component";
import {CreateTestComponent} from "../../tests/crud/create-test/create-test.component";


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ManagerLayoutRoutes),
    FormsModule,
    LbdModule,
    NguiMapModule.forRoot({apiUrl: 'https://maps.google.com/maps/api/js?key=YOUR_KEY_HERE'})
  ],
  declarations: [
    HomeComponent,
    UserComponent,
    CategoryComponent,
    QuizComponent,
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
