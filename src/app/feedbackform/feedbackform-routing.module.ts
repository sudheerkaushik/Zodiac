import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { FeedbackformComponent } from "./feedbackform-component";

const routes: Routes = [
    { path: "", component: FeedbackformComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class FeedbackformRoutingModule { }
