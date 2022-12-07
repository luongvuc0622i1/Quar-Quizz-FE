import { Routes } from '@angular/router';

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

export const ManagerLayoutRoutes: Routes = [
    { path: 'dashboard',      component: HomeComponent },
    { path: 'user',           component: UserComponent },
    { path: 'category',       component: CategoryComponent },
    { path: 'quiz',          component: QuizComponent },
    { path: 'test/list',           component: ListTestComponent },
    { path: 'test/create',           component: CreateTestComponent },
    { path: 'table',          component: TablesComponent },
    { path: 'typography',     component: TypographyComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'notifications',  component: NotificationsComponent },
];
