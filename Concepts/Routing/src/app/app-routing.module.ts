import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {
    path:'about',
    component:AboutComponent
  },
  {
    component:UserComponent,
    path:'user/:id'
  },
  {
    path:'',
    component:HomeComponent
  },
  {
    component:ErrorPageComponent,
    path:'**'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
