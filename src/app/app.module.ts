import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FastCommentsPageComponent } from './fast-comments-page/fast-comments-page.component';
import { MainPageComponent } from './main-page/main-page.component';
import { FastCommentsModule } from 'ngx-fastcomments';
@NgModule({
  declarations: [
    AppComponent,
    FastCommentsPageComponent,
    MainPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FastCommentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
