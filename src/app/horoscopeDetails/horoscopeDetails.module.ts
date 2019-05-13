import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";

import { NativeScriptCommonModule } from "nativescript-angular/common";

import { HoroscopeDetailsRoutingModule } from "./horoscopeDetails-routing.module";
import { HoroscopeDetailsComponent } from "./horoscopeDetails.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        HoroscopeDetailsRoutingModule
    ],
    declarations: [
        HoroscopeDetailsComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class HoroscopeDetailsModule { }
