import { MapTo } from "@adobe/aem-angular-editable-components";
import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-multifield-example-component",
  templateUrl: "./multifield-example-component.html",
  styleUrls: ["./multifield-example-component.scss"],
})
export class MultifieldExampleComponent implements OnInit {
  @Input() items: [];

  constructor() {}

  ngOnInit(): void {}
}

MapTo("angularapp/components/multifield-example-component")(
  MultifieldExampleComponent,
);
