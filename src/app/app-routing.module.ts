import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ErrorComponent } from './error/error.component';
import { LoginComponent } from './login/login.component';
import { AdminLayoutComponent } from './admin/admin-layout/admin-layout.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { ManageContactsComponent } from './admin/manage-contacts/manage-contacts.component';
import { AddContactsComponent } from './admin/add-contacts/add-contacts.component';
import { UpdateContactsComponent } from './admin/update-contacts/update-contacts.component';
import { adminGuard } from './admin/guard/admin.guard';

const routes: Routes = [
  {path:'', redirectTo:'/login', pathMatch:'full'},
  {path:'login', component:LoginComponent},

  

  {path:'admin', component:AdminLayoutComponent, canActivate:[adminGuard], children:[
    {path:'admin-dashboard', component:AdminDashboardComponent},
    {path:'manage-contacts', component:ManageContactsComponent},
    {path:'add-contacts', component:AddContactsComponent},
    {path:'update-contacts/:id', component:UpdateContactsComponent},
    
  ]},

  {path:'**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
