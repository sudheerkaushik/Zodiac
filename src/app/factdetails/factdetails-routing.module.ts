import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { FactdetailsComponent } from "./factdetails.component";

const routes: Routes = [
    { path: "", component: FactdetailsComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class FactdetailsRoutingModule { }
