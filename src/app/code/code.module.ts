import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CodePageComponent } from './component/code-page/code-page.component';
import { CollectionComponent } from './component/collection/collection.component';
import { ReturnComponent } from './component/return/return.component';
import { HowCollectComponent } from './component/how-collect/how-collect.component';
import { HowReturnComponent } from './component/how-return/how-return.component';
import {ReturnService} from "./service/returnService/return.service";
import {CollectionService} from "./service/collectionService/collection.service";
import {FormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    CodePageComponent,
    CollectionComponent,
    ReturnComponent,
    HowCollectComponent,
    HowReturnComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    CodePageComponent,
  ],
  providers: [
    ReturnService,
    CollectionService,
  ]
})
export class CodeModule { }
