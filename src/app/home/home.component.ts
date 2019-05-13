import { Component } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "Home",
  moduleId: module.id,
  styleUrls: ['home.css'],
  templateUrl: "./home.component.html"
})
export class HomeComponent {
  private factsJsonUrl = "http://www.mocky.io/v2/5cc9b92f310000e00e12cd9a";//"../../json/facts.json";
  zodiacName; //: Item[]
  facts;
  factData;
  zodiacImg;

  constructor(private http: HttpClient) { }

  createAuthorizationHeader(headers: Headers) {
    headers.append('Authorization', 'x-api-key');
  }
  onTap(e) {
    console.log("Tap!" + e);
    // e.animate({
    //   rotate: 360, // will take into account originX and originY
    //   duration: 1000
    // });
  }
  getData() {
    let headers = new Headers();
    this.createAuthorizationHeader(headers);
    this.http.get(this.factsJsonUrl).subscribe(
      data => {
        this.facts = data; //as string [];    
        // console.log("\n\n\n\n\n type of date is " + typeof (this.facts) + "\t\t\tAll " + (JSON.stringify(this.facts.facts.content)));
        // console.log("\n\npath is  " + this.factsJsonUrl + "\n\n");
        this.renderData();
      },
      (err) => {
        // displayAlertDialog('info', err.message, 'ok');
        console.log(err.message);
      }
    );
  }

  renderData() {
    this.factData = this.facts.facts.content;
    // for (var i = 0; i < this.factData.length; i++) {
    //   this.zodiacName = this.factData[i].name;
    //   this.zodiacImg = '~/img/horoIcons/Tauras.jpg';
    //   console.log("\n\t\tname is " + this.zodiacName + ' ' + this.zodiacImg);
    // }
  }
  ngOnInit(): void {
    this.getData();
  }

  onDrawerButtonTap(): void {
    const sideDrawer = <RadSideDrawer>app.getRootView();
    sideDrawer.showDrawer();
  }
}
