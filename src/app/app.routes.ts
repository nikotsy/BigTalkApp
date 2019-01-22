import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NewUserComponent } from './new-user/new-user.component';
import { CategoryPickComponent } from './category-pick/category-pick.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { ThanksComponent } from './thanks/thanks.component';
import { ShowAllComponent } from './show-all/show-all.component';
import { EditUserResolver } from './edit-user/edit-user.resolver';

export const rootRouterConfig: Routes = [
  { path: '', component: CategoryPickComponent },
  { path: 'home', component: CategoryPickComponent },
  { path: 'new-user', component: NewUserComponent },
  { path: 'thanks', component: ThanksComponent },
  { path: 'show-all', component: HomeComponent },
  { path: 'details/:id', component: EditUserComponent, resolve:{data : EditUserResolver} }
];
