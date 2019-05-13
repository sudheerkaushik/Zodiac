import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptUISideDrawerModule } from "nativescript-ui-sidedrawer/angular";
import { NativeScriptFormsModule } from "nativescript-angular/forms";

import { FeedbackformRoutingModule } from "./feedbackform-routing.module";
import { FeedbackformComponent } from "./feedbackform-component";

@NgModule({
    imports: [
        NativeScriptUISideDrawerModule,
        NativeScriptCommonModule,
        FeedbackformRoutingModule,
        NativeScriptFormsModule
    ],
    declarations: [
        FeedbackformComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class FeedbackformModule { }
