import { Component } from "@angular/core";

@Component({
  selector: "em-dashboard-view",
  template: `
    <h1>Email Editor</h1>
    <ee-email-editor></ee-email-editor>
  `,
  styleUrls: ["./dashboard-view.component.scss"],
})
export class DashboardViewComponent {}
