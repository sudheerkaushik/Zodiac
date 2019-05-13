import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { alert } from "tns-core-modules/ui/dialogs";
import { Progress } from "tns-core-modules/ui/progress";


import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";


/* ***********************************************************
* Before you can navigate to this page from your app, you need to reference this page's module in the
* global app router module. Add the following object to the global array of routes:
* { path: "factdetails", loadChildren: "./factdetails/factdetails.module#FactdetailsModule" }
* Note that this simply points the path to the page module file. If you move the page, you need to update the route too.
*************************************************************/

@Component({
    selector: "Factdetails",
    moduleId: module.id,
    templateUrl: "./factdetails.component.html"
})
export class FactdetailsComponent implements OnInit {
    private dailyHorosscopeURL = "http://horoscope-api.herokuapp.com/horoscope/today/";
    private factsJsonUrl = "http://www.mocky.io/v2/5ccc590d3300006d5be01c78";
    // private factsJsonUrl = "http://www.mocky.io/v2/5cd43eaa35000050407a5449";
    

    _id;
    _selectedZodiacName;
    _currentZodiacData;
    horoscope;



    facts;
    singlefactData;
    indiFact;
    singlefactList;
    name;

    constructor(private route: ActivatedRoute, private http: HttpClient) {
        /* ***********************************************************
        * Use the constructor to inject app services that you need in this component.
        *************************************************************/
    }

    getClikedId() {
        this._id = this.route.snapshot.params["id"];
        this.getClickedzodiac(this._id);
    }

    getClickedzodiac(id: number) {
        this.http.get(this.factsJsonUrl).subscribe(
            data => {
                this.renderFacts(data, id);
            },
            (err) => {
                console.log("\n\nNo facts available coz\t\t\t\t" + err.message + "\n\n");
            }
        );
    }

    private renderFacts(resp, id) {
        this._currentZodiacData = resp;
        this._selectedZodiacName = this._currentZodiacData.facts.content.filter(item => item.id == this._id)[0];
        this._selectedZodiacName = this._selectedZodiacName.name;
        console.log(this._selectedZodiacName);



        this.facts = resp; //as string [];   
        this.singlefactData = this.facts.facts.content.filter(item => item.id == this._id)[0];
        this.singlefactList = this.singlefactData.list;
        console.log(this.singlefactList);
        for (var i = 0; i < this.singlefactList.length - 1; i++) {
            this.indiFact = this.singlefactList[i].fact;
            this.name = this.singlefactData.name;
        }
    }

    ngOnInit(): void {
        this.getClikedId();
        /* ***********************************************************
        * Use the "ngOnInit" handler to initialize data for this component.
        *************************************************************/
    }
    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }
}
