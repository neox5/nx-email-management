import { Component, ViewChild } from "@angular/core";
import { EmailEditorComponent } from "@nx-email-management/email-editor";

import * as sampleJson from "./sampleTemplate.json";

@Component({
  selector: "em-dashboard-view",
  template: `
    <div class="container">
      <div class="bar">
        <h1>Email Editor</h1>
        <div class="buttons">
          <button class="save" (click)="onClickLoadSecondTemplate()">
            LOAD SECOND TEMPLATE
          </button>
          <button class="save" (click)="onClickSaveAsHtml()">EXPORT HTML</button>
          <button class="save" (click)="onClickSaveTemplate()">
            SAVE TEMPLATE
          </button>
        </div>
      </div>
      <ee-email-editor
        #editor
        (loaded)="onEditorLoaded($event)"
      ></ee-email-editor>
    </div>
  `,
  styleUrls: ["./dashboard-view.component.scss"],
})
export class DashboardViewComponent {
  @ViewChild("editor")
  private _emailEditor!: EmailEditorComponent;

  public onEditorLoaded(event: any): void {
    console.log("Editor is loaded:", event);
  }

  public onClickLoadSecondTemplate(): void {
    this._emailEditor.loadDesign(sampleJson);
  }

  public onClickSaveAsHtml(): void {
    this._emailEditor.exportHtml((data) => console.log("exportHtml:", data));
  }

  public onClickSaveTemplate(): void {
    this._emailEditor.saveDesign((data) =>
      console.log("saveDesign:", JSON.stringify(data))
    );
  }
}
