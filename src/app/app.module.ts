import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ContactusComponent } from './contactus/contactus.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { OptionalParameterComponent } from './optional-parameter/optional-parameter.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { Feacture1Module } from './feacture1/feacture1.module';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    ContactusComponent,
    UserDetailsComponent,
    OptionalParameterComponent,
    EmployeeListComponent,
    EmployeeDetailsComponent,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    Feacture1Module,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
