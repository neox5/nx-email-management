import { Component } from "@angular/core";

@Component({
  selector: "em-root",
  template: ` <router-outlet></router-outlet>  `,
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "email-management";
}
