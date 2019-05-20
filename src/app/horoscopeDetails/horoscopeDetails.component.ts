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
* { path: "horoscopeDetails", loadChildren: "./horoscopeDetails/horoscopeDetails.module#HoroscopeDetailsModule" }
* Note that this simply points the path to the page module file. If you move the page, you need to update the route too.
*************************************************************/
// @Injectable()

@Component({
  selector: "HoroscopeDetails",
  moduleId: module.id,
  styleUrls: ['horoscopeDetails.css'],
  templateUrl: "./horoscopeDetails.component.html"
})
export class HoroscopeDetailsComponent {
  private dailyHorosscopeURL = "http://horoscope-api.herokuapp.com/horoscope/today/";
  private factsJsonUrl = "http://www.mocky.io/v2/5cc9b92f310000e00e12cd9a";

  _id;
  _selectedZodiacName;
  _currentZodiacData;
  horoscope;
  public progressValue: number;

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
    /*let headers = new Headers();
this.createAuthorizationHeader(headers);*/
    this.http.get(this.factsJsonUrl).subscribe(
      data => {
        // setInterval(() => {
        //   this.progressValue += 100;
        // }, 300);
        this.getCurrentZodiacName(data, id);
      },
      (err) => {
        console.log("\n\nNo facts available coz\t\t\t\t" + err.message + "\n\n");
      }
    );

  }

  getCurrentZodiacName(resp, id: number) {
    this._currentZodiacData = resp;
    this._selectedZodiacName = this._currentZodiacData.facts.content.filter(item => item.id == this._id)[0];
    this._selectedZodiacName = this._selectedZodiacName.name;
    this.getItem(this._selectedZodiacName);
  }
  getItem(name) {
    this.http.get(this.dailyHorosscopeURL + name).subscribe(
      data => {
        this.renderHoroscope(data);
      },
      (err) => {
        console.log("\n\nNo facts available coz\t\t\t\t" + err.message + "\n\n");
      }
    );
  }
  private renderHoroscope(resp) {
    if (this._selectedZodiacName != '' && this._selectedZodiacName != 'undefined') {
      this.horoscope = resp.horoscope;
    }
  }

  ngOnInit(): void {
    this.getClikedId();
    // this.progressValue = 25;


    /* ***********************************************************
    * Use the "ngOnInit" handler to initialize data for this component.
    *************************************************************/
  }
  onValueChanged(args) {
    let progressBar = <Progress>args.object;
  }
  onDrawerButtonTap(): void {
    const sideDrawer = <RadSideDrawer>app.getRootView();
    sideDrawer.showDrawer();
  }
}
