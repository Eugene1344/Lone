import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopbarComponent } from './topbar.component';
import { RouterModule } from "@angular/router";


@NgModule({
  declarations: [
    TopbarComponent
  ],
  exports: [
    TopbarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ]
})
export class TopbarModule { }
