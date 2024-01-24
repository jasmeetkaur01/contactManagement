import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './admin/admin-layout/admin-layout.component';
import { AdminHeaderComponent } from './admin/admin-layout/admin-header/admin-header.component';
import { AdminFooterComponent } from './admin/admin-layout/admin-footer/admin-footer.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './error/error.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ManageContactsComponent } from './admin/manage-contacts/manage-contacts.component';
import { AddContactsComponent } from './admin/add-contacts/add-contacts.component';
import { UpdateContactsComponent } from './admin/update-contacts/update-contacts.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { NgxSpinnerModule } from "ngx-spinner";

@NgModule({
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AdminHeaderComponent,
    AdminFooterComponent,
    AdminDashboardComponent,
    
    LoginComponent,
    ErrorComponent,
    ManageContactsComponent,
    AddContactsComponent,
    UpdateContactsComponent,
  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    NgxSpinnerModule, 
    ToastrModule.forRoot({preventDuplicates:true}), 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
