import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminFormCreateEventComponent } from './components/admin-form-create-event/admin-form-create-event.component';
import { AdminFormManageEventComponent } from './components/admin-form-manage-event/admin-form-manage-event.component';


const routes: Routes = [
  { path: 'new/advertisingconfig', component: AdminFormCreateEventComponent },
  { path: 'manage/advertisingconfig', component: AdminFormManageEventComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
