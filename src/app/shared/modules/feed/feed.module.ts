import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedComponent } from './feed.component';
import {EffectsModule} from "@ngrx/effects";
import {GetFeedEffect} from "./store/effects/getFeed.effect";
import {StoreModule} from "@ngrx/store";
import {feedReducer} from "./store/reducer";
import {FeedService} from "../../services/feed.service";

@NgModule({
  declarations: [
    FeedComponent
  ],
  exports: [
    FeedComponent
  ],
  imports: [
    CommonModule,
    EffectsModule.forFeature([GetFeedEffect]),
    StoreModule.forFeature('feed' , feedReducer)
  ],
  providers: [
    FeedService
  ]
})
export class FeedModule { }
