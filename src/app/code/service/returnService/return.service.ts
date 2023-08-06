import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, of, take} from "rxjs";
import {ReturnModel} from "../../model/return.model";

@Injectable()
export class ReturnService {
  returnDataSubject: BehaviorSubject<ReturnModel | null> = new BehaviorSubject<ReturnModel | null>(null);

  fetchReturnPackage(returnCode?: number): void {
    if(returnCode === undefined) {
      return;
    }
    this.returnPackage(returnCode).pipe(take(1)).subscribe( data => {
      this.returnDataSubject.next(data);
    });
  }

  clearReturnDataSubject() {
    this.returnDataSubject.next(null);
  }

  private returnPackage(collectionCode?: number): Observable<ReturnModel> {
    return of({
      qrcode: '/image/abc.svg',
      expirationDate: '2022-11-03 12:00',
      size: "A",
    })
  }
}
