import { Component, Input, OnInit } from "@angular/core";
import { MapTo } from "@adobe/aem-angular-editable-components";

@Component({
  selector: "app-basic-component",
  templateUrl: "./basic-component.component.html",
  styleUrls: ["./basic-component.component.css"],
})
export class BasicComponentComponent implements OnInit {
  @Input() text: string;
  @Input() checkbox: boolean;
  constructor() {}

  ngOnInit(): void {}
}

MapTo("angularapp/components/basic-component")(BasicComponentComponent);
