import {Component, OnInit} from '@angular/core';
import {CodeTypeEnumModel} from "../../model/code-type-enum.model";

@Component({
  selector: 'app-code-page',
  templateUrl: './code-page.component.html',
  styleUrls: ['./code-page.component.css']
})
export class CodePageComponent implements OnInit {

  selectedCodeType: CodeTypeEnumModel = CodeTypeEnumModel.COLLECT;

  CodeTypeEnumModel = CodeTypeEnumModel;



  constructor() { }

  ngOnInit(): void {
  }

}
