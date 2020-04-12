import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminFormCreateEventComponent } from './components/admin-form-create-event/admin-form-create-event.component';


const routes: Routes = [
  { path: 'new/campaign', component: AdminFormCreateEventComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
