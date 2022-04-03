import { Component, Input, HostBinding } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: "app-text",
  styleUrls: ["./text.component.css"],
  templateUrl: "./text.component.html",
})
export class TextComponent {
  @Input() richText: boolean;
  @Input() text: string;
  @Input() itemName: string;

  @HostBinding("innerHtml") get content() {
    return this.richText
      ? this.sanitizer.bypassSecurityTrustHtml(this.text)
      : this.text;
  }
  @HostBinding("attr.data-rte-editelement") editAttribute = true;

  constructor(private sanitizer: DomSanitizer) {}
}
