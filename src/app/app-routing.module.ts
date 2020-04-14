import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { MainListComponent } from './components/main-list/main-list.component';
import { AdminFormCreateEventComponent } from './components/admin-form-create-event/admin-form-create-event.component';
import { AdminFormManageEventComponent } from './components/admin-form-manage-event/admin-form-manage-event.component';


const routes: Routes = [
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'register', component: RegisterComponent
  },
  {
    path: 'mainList', component: MainListComponent
  },
  { path: 'new/advertisingconfig', component: AdminFormCreateEventComponent },
  { path: 'manage/advertisingconfig', component: AdminFormManageEventComponent}





@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
