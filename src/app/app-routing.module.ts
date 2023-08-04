import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CodePageComponent} from "./code/component/code-page/code-page.component";

const routes: Routes = [
  { path: '', component: CodePageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
