import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { Comp1Component } from "./f2-comp1/comp1.component";

const routes: Routes = [
    {path: 'feacture2', component: Comp1Component}
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class Feacture2RoutingModule { };