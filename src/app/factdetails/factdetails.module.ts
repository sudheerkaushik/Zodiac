import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";

import { NativeScriptCommonModule } from "nativescript-angular/common";
import { FactdetailsRoutingModule } from "./factdetails-routing.module";
import { FactdetailsComponent } from "./factdetails.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        FactdetailsRoutingModule
    ],
    declarations: [
        FactdetailsComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class FactdetailsModule { }
