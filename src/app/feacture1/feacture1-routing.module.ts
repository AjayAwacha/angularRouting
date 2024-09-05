import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';

const routes: Routes = [
  {path: 'feacture', component: Comp1Component},
  {path: 'feacture/:id', component: Comp2Component}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Feacture1RoutingModule { }
