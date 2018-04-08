import { Component, OnInit } from "@angular/core";
import { Button } from "ui/button";
import { EventData } from "data/observable";
import { ActivatedRoute } from "@angular/router";
import * as SocialShare from "nativescript-social-share";

import { Item } from "../item/item";
import { ItemService } from "../item/item.service";

@Component({
  moduleId: module.id,
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  public counter: number = 0;
  /*item: Item;*/
  items: Item[];

  constructor(
    private itemService: ItemService,
    private route: ActivatedRoute
  ) {}

  shareText() {
    SocialShare.shareText("Checkout this app build by shudhpandit");
  }
  onTap(args: EventData) {
    let button = <Button>args.object;

    this.counter++;
    alert("Tapped " + this.counter + " times!");
  }
  ngOnInit() {
    this.items = this.itemService.getItems();
  }
}
