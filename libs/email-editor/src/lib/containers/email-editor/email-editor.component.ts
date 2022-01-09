import {
  Component,
  AfterViewInit,
  Input,
  Output,
  EventEmitter,
} from "@angular/core";

import { loadScript } from "./loadScript";

declare let unlayer: any;

export interface UnlayerOptions {
  projectId?: number;
  tools?: object;
  appearance?: object;
  locale?: string;
}

let lastEditorId = 0;

@Component({
  selector: "ee-email-editor",
  template: `
    <div
      [id]="editorId"
      class="unlayer-editor"
      [style.min-height]="minHeight"
    ></div>
  `,
  styleUrls: ["./email-editor.component.scss"],
})
export class EmailEditorComponent implements AfterViewInit {
  @Input() editorId: string;
  @Input() options: UnlayerOptions = {};
  @Input() projectId!: number;
  @Input() tools!: object;
  @Input() appearance!: object;
  @Input() locale!: string;

  @Input() minHeight = "500px";

  @Output() loaded = new EventEmitter();

  editor: any;

  constructor() {
    this.editorId = `editor-${++lastEditorId}`;
  }


  ngAfterViewInit() {
    loadScript(this.loadEditor.bind(this));
  }

  protected loadEditor() {
    const options: UnlayerOptions = this.options || {};

    if (this.projectId) {
      options.projectId = this.projectId;
    }

    if (this.tools) {
      options.tools = this.tools;
    }

    if (this.appearance) {
      options.appearance = this.appearance;
    }

    if (this.locale) {
      options.locale = this.locale;
    }

    this.editor = unlayer.createEditor({
      ...options,
      id: this.editorId,
      displayMode: "email",
      source: {
        name: "test",
        version: "1.0.3",
      },
    });

    this.loaded.emit({});
  }

  public loadDesign(data: object) {
    this.editor.loadDesign(data);
  }

  public saveDesign(cb: (data: object) => void) {
    this.editor.saveDesign(cb);
  }

  public exportHtml(cb: (data: object) => void) {
    this.editor.exportHtml(cb);
  }
}
