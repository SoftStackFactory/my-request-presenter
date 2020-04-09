import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainListComponent } from './components/main-list/main-list.component';


const routes: Routes = [
 
  {
    path: 'mainList', component: MainListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
