import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";


@Component({
    selector: "about",
    moduleId: module.id,
    templateUrl: "./about.component.html",
    styleUrls: ['./about.component.css']
})
export class AboutComponent {
    private Abouturl = "http://www.mocky.io/v2/5cd44c543500006da77a5498";
    constructor(private route: ActivatedRoute, private http: HttpClient) {
        /* ***********************************************************
        * Use the constructor to inject app services that you need in this component.
        *************************************************************/
    }
    userProfileList: any;
    AppDetails: any;

    getAppData(){
        this.http.get(this.Abouturl).subscribe(
            data => {
                this.renderAbout(data);
            },
            (err) => {
                console.log("\n\nNo facts available coz\t\t\t\t" + err.message + "\n\n");
            }
        );
    }
    private renderAbout(resp){
        this.AppDetails=resp.data;
        this.userProfileList= resp.data.contributors;
        console.log(this.userProfileList);
    }
    ngOnInit(): void {
        this.getAppData();
    }
    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }
}
