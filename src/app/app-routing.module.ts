import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { FastCommentsPageComponent } from './fast-comments-page/fast-comments-page.component';

const routes: Routes = [
  { path: 'main', component: MainPageComponent },
  { path: 'fast-comments', component: FastCommentsPageComponent },
  { path: '', redirectTo: '/main', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
