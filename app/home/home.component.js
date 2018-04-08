"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var SocialShare = require("nativescript-social-share");
var item_service_1 = require("../item/item.service");
var HomeComponent = /** @class */ (function () {
    function HomeComponent(itemService, route) {
        this.itemService = itemService;
        this.route = route;
        this.counter = 0;
    }
    HomeComponent.prototype.shareText = function () {
        SocialShare.shareText("Checkout this app build by shudhpandit");
    };
    HomeComponent.prototype.onTap = function (args) {
        var button = args.object;
        this.counter++;
        alert("Tapped " + this.counter + " times!");
    };
    HomeComponent.prototype.ngOnInit = function () {
        this.items = this.itemService.getItems();
    };
    HomeComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "app-home",
            templateUrl: "./home.component.html",
            styleUrls: ["./home.component.scss"]
        }),
        __metadata("design:paramtypes", [item_service_1.ItemService,
            router_1.ActivatedRoute])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUdsRCwwQ0FBaUQ7QUFDakQsdURBQXlEO0FBR3pELHFEQUFtRDtBQVFuRDtJQUtFLHVCQUNVLFdBQXdCLEVBQ3hCLEtBQXFCO1FBRHJCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBTnhCLFlBQU8sR0FBVyxDQUFDLENBQUM7SUFPeEIsQ0FBQztJQUVKLGlDQUFTLEdBQVQ7UUFDRSxXQUFXLENBQUMsU0FBUyxDQUFDLHdDQUF3QyxDQUFDLENBQUM7SUFDbEUsQ0FBQztJQUNELDZCQUFLLEdBQUwsVUFBTSxJQUFlO1FBQ25CLElBQUksTUFBTSxHQUFXLElBQUksQ0FBQyxNQUFNLENBQUM7UUFFakMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ2YsS0FBSyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsT0FBTyxHQUFHLFNBQVMsQ0FBQyxDQUFDO0lBQzlDLENBQUM7SUFDRCxnQ0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQzNDLENBQUM7SUFyQlUsYUFBYTtRQU56QixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxVQUFVO1lBQ3BCLFdBQVcsRUFBRSx1QkFBdUI7WUFDcEMsU0FBUyxFQUFFLENBQUMsdUJBQXVCLENBQUM7U0FDckMsQ0FBQzt5Q0FPdUIsMEJBQVc7WUFDakIsdUJBQWM7T0FQcEIsYUFBYSxDQXNCekI7SUFBRCxvQkFBQztDQUFBLEFBdEJELElBc0JDO0FBdEJZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcInVpL2J1dHRvblwiO1xuaW1wb3J0IHsgRXZlbnREYXRhIH0gZnJvbSBcImRhdGEvb2JzZXJ2YWJsZVwiO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgKiBhcyBTb2NpYWxTaGFyZSBmcm9tIFwibmF0aXZlc2NyaXB0LXNvY2lhbC1zaGFyZVwiO1xuXG5pbXBvcnQgeyBJdGVtIH0gZnJvbSBcIi4uL2l0ZW0vaXRlbVwiO1xuaW1wb3J0IHsgSXRlbVNlcnZpY2UgfSBmcm9tIFwiLi4vaXRlbS9pdGVtLnNlcnZpY2VcIjtcblxuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiBcImFwcC1ob21lXCIsXG4gIHRlbXBsYXRlVXJsOiBcIi4vaG9tZS5jb21wb25lbnQuaHRtbFwiLFxuICBzdHlsZVVybHM6IFtcIi4vaG9tZS5jb21wb25lbnQuc2Nzc1wiXVxufSlcbmV4cG9ydCBjbGFzcyBIb21lQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgcHVibGljIGNvdW50ZXI6IG51bWJlciA9IDA7XG4gIC8qaXRlbTogSXRlbTsqL1xuICBpdGVtczogSXRlbVtdO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgaXRlbVNlcnZpY2U6IEl0ZW1TZXJ2aWNlLFxuICAgIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlXG4gICkge31cblxuICBzaGFyZVRleHQoKSB7XG4gICAgU29jaWFsU2hhcmUuc2hhcmVUZXh0KFwiQ2hlY2tvdXQgdGhpcyBhcHAgYnVpbGQgYnkgc2h1ZGhwYW5kaXRcIik7XG4gIH1cbiAgb25UYXAoYXJnczogRXZlbnREYXRhKSB7XG4gICAgbGV0IGJ1dHRvbiA9IDxCdXR0b24+YXJncy5vYmplY3Q7XG5cbiAgICB0aGlzLmNvdW50ZXIrKztcbiAgICBhbGVydChcIlRhcHBlZCBcIiArIHRoaXMuY291bnRlciArIFwiIHRpbWVzIVwiKTtcbiAgfVxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLml0ZW1zID0gdGhpcy5pdGVtU2VydmljZS5nZXRJdGVtcygpO1xuICB9XG59XG4iXX0=