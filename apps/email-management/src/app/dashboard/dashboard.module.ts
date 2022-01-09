import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { views, DashboardViewComponent } from "./views";
import { RouterModule, Routes } from "@angular/router";

import { EmailEditorModule } from "@nx-email-management/email-editor";

const SUBROUTES: Routes = [
  {
    path: "dashboard",
    pathMatch: "full",
    component: DashboardViewComponent,
  },
  {
    path: "",
    pathMatch: "full",
    redirectTo: "dashboard",
  },
];

@NgModule({
  declarations: [...views],
  imports: [CommonModule, RouterModule.forChild(SUBROUTES), EmailEditorModule],
})
export class DashboardModule {}
