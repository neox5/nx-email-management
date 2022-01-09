import { Component } from "@angular/core";

@Component({
  selector: "em-root",
  template: ` <em-nx-welcome></em-nx-welcome> `,
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "email-management";
}
