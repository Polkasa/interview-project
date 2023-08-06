import { Component, OnInit } from '@angular/core';
import {ReturnService} from "../../service/returnService/return.service";

@Component({
  selector: 'app-return',
  templateUrl: './return.component.html',
  styleUrls: ['./return.component.css']
})
export class ReturnComponent implements OnInit {

  returnCode?: number;

  constructor(public returnService: ReturnService) { }

  ngOnInit(): void {
    this.returnCode = undefined;
  }

  ngOnDestroy() {
    this.returnService.clearReturnDataSubject();
  }

  returnPackage() {
    this.returnService.fetchReturnPackage(this.returnCode);
  }

}
