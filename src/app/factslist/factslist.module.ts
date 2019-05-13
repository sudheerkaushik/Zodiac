import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { FactslistRoutingModule } from "./factslist-routing.module";
import { FactslistComponent } from "./factslist.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        FactslistRoutingModule
    ],
    declarations: [
        FactslistComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class FactslistModule { }
