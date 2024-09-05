import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Comp1Component } from './f2-comp1/comp1.component';
import { Feacture2RoutingModule } from './feacture2-routing.module';



@NgModule({
  declarations: [
    Comp1Component
  ],
  imports: [
    CommonModule,
    Feacture2RoutingModule
  ]
})
export class Feacture2Module { }
