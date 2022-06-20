import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './components/register/register.component';
import { RouterModule, Routes } from "@angular/router";

import { ReactiveFormsModule } from "@angular/forms";
import {StoreModule} from "@ngrx/store";
import { authReducer } from "./store/reducers"
import {AuthService} from "./services/auth.service";
import {EffectsModule} from "@ngrx/effects";
import {RegisterEffect} from "./store/effects/register.effect";
import {BackendErrorMessagesModule} from "../shared/modules/backend-error-messages/backend-error-messages.module";


const routes: Routes = [
  {
    path: 'register',
    component: RegisterComponent
  }
]

@NgModule({
  declarations: [
    RegisterComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    StoreModule.forFeature('auth', authReducer),
    EffectsModule.forFeature([RegisterEffect]),
    BackendErrorMessagesModule
  ],
  providers: [
    AuthService,
  ]
})
export class AuthModule { }