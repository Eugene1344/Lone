import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AuthModule} from "./auth/auth.module";
import {StoreModule} from "@ngrx/store";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {environment} from "../environments/environment";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { EffectsModule } from '@ngrx/effects';
import {TopbarModule} from "./shared/modules/topbar/topbar.module";
import {PersistanceService} from "./shared/services/persistance.service";
import {AuthInterceptor} from "./auth/services/authInterceptor.service";
import { GlobalFeedComponent } from './global-feed/components/global-feed/global-feed.component';
import {GlobalFeedModule} from "./global-feed/global-feed.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    GlobalFeedModule,
    TopbarModule,
    HttpClientModule,
    StoreModule.forRoot({}),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    EffectsModule.forRoot([]),
  ],
  providers: [
    PersistanceService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
