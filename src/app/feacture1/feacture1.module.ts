import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Feacture1RoutingModule } from './feacture1-routing.module';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';



@NgModule({
  declarations: [
    Comp1Component,
    Comp2Component
  ],
  imports: [
    CommonModule,
    Feacture1RoutingModule
  ]
})
export class Feacture1Module { }
