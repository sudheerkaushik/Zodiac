import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { HoroscopeDetailsComponent } from "./horoscopeDetails.component";

const routes: Routes = [
    { path: "", component: HoroscopeDetailsComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class HoroscopeDetailsRoutingModule { }
