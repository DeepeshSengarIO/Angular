import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RatInAMazeComponent } from './rat-in-a-maze/rat-in-a-maze.component';
import { SortingComponent } from './sorting/sorting.component';

const routes: Routes = [
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'rat-in-a-maze',
    component:RatInAMazeComponent
  },
  {
    path:'sort',
    component: SortingComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
