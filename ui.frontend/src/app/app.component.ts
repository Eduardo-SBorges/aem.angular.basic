import { ModelManager } from "@adobe/aem-spa-page-model-manager";

import { Constants } from "@adobe/aem-angular-editable-components";
import { Component } from "@angular/core";
@Component({
  selector: "#spa-root", // tslint:disable-line
  styleUrls: ["./app.component.css"],
  templateUrl: "./app.component.html",
})
export class AppComponent {
  items: any;
  itemsOrder: any;
  path: any;
  constructor() {
    ModelManager.initialize().then(this.updateData);
  }
  private updateData = (pageModel) => {
    this.path = pageModel[Constants.PATH_PROP];
    this.items = pageModel[Constants.ITEMS_PROP];
    this.itemsOrder = pageModel[Constants.ITEMS_ORDER_PROP];
  };
}
