import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
    { path: "", redirectTo: "/about", pathMatch: "full" },
    { path: "home", loadChildren: "~/app/home/home.module#HomeModule" },
    { path: "horoscope/:id", loadChildren: "~/app/horoscopeDetails/horoscopeDetails.module#HoroscopeDetailsModule" },
    { path: "factlist", loadChildren: "~/app/factslist/factslist.module#FactslistModule" },
    { path: "factdetails/:id", loadChildren: "~/app/factdetails/factdetails.module#FactdetailsModule" },
    { path: "about", loadChildren: "~/app/about/about-module#AboutModule" },
    { path: "feedbackForm", loadChildren: "~/app/feedbackForm/feedbackForm-module#FeedbackformModule" },
    { path: "settings", loadChildren: "~/app/settings/settings.module#SettingsModule" }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
