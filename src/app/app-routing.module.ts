import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// components
import { HomepageComponent } from './homepage/homepage.component';
import { ContactusComponent } from './contactus/contactus.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { OptionalParameterComponent } from './optional-parameter/optional-parameter.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

// Route Guards
import { AuthguardGuard } from './guards/authguard.guard';
import { ChildGuardGuard } from './guards/child-guard.guard';
import { CheckdeactivateGuard } from './guards/checkdeactivate.guard';
import { LoadGuard } from './guards/load.guard';
import { ResolveGuard } from './guards/resolve.guard';

const routes: Routes = [
  {
    path: 'home', component: HomepageComponent, canDeactivate: [CheckdeactivateGuard]
  },
  {
    path: 'home:/id', component: HomepageComponent
  },
  {
    path: 'contact', component: ContactusComponent, canActivate: [AuthguardGuard]
  },
  {
    path: 'user/:userId', component: UserDetailsComponent
  },
  {
    path: 'optional/:name', component: OptionalParameterComponent
  },
  {
    path: 'optional/:name/:age', resolve: { userDetails: ResolveGuard }, component: OptionalParameterComponent
  },
  {
    path: 'employee', component: EmployeeListComponent, canActivateChild: [ChildGuardGuard], children: [
      { path: ':name/:age', component: EmployeeDetailsComponent}
    ]
  },
  {
    path: 'lazy-loading', canLoad: [LoadGuard], loadChildren: () => import('./feacture2/feacture2.module').then(m => m.Feacture2Module)
  },
  {
    path: '**', component: PagenotfoundComponent
  }
  // {
  //   path: 'home', component: HomepageComponent
  // },
  // {
  //   path: 'home/:id', component: ContactusComponent
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
