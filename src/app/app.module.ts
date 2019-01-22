import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';
import { rootRouterConfig } from './app.routes';

import { AppComponent } from './app.component';
import { AvatarDialogComponent } from './avatar-dialog/avatar-dialog.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { EditUserResolver } from './edit-user/edit-user.resolver';
import { NewUserComponent } from './new-user/new-user.component';
import { HomeComponent } from './home/home.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { FirebaseService } from './services/firebase.service';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatInputModule, MatSliderModule, MatDialogModule } from '@angular/material';
import { CategoryPickComponent } from './category-pick/category-pick.component';

import { ArchwizardModule } from 'angular-archwizard';

import {MatChipsModule} from '@angular/material/chips';
import { TagInputModule } from 'ngx-chips';
import { InputFlowModule } from 'ngx-input-flow';
import { ShowAllComponent } from './show-all/show-all.component';
import {MatIconModule} from '@angular/material/icon';
import { ThanksComponent } from './thanks/thanks.component';






@NgModule({
  declarations: [
    AppComponent,
    AvatarDialogComponent,
    EditUserComponent,
    NewUserComponent,
    HomeComponent,
    CategoryPickComponent,
    AppComponent,
    ShowAllComponent,
    ThanksComponent
  ],
  entryComponents: [AvatarDialogComponent],
  imports: [
    BrowserModule,
    ArchwizardModule,
    MatChipsModule,
    TagInputModule, 
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    InputFlowModule,
    RouterModule.forRoot(rootRouterConfig, { useHash: false }),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatSliderModule,
    MatDialogModule,
    
  ],
  providers: [FirebaseService, EditUserResolver],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule { }
