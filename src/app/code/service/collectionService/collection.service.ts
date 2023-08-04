import { Injectable } from '@angular/core';
import {CollectionModel} from "../../model/collection.model";
import {Observable, of} from "rxjs";

@Injectable()
export class CollectionService {
  collectedItem: CollectionModel = {
    qrcode: '',
    expirationDate: '',
    multicompartment: false,
  }

  collectPackage(collectionCode: number): Observable<CollectionModel> {
    return of({
      qrcode: '/image/abc.svg',
      expirationDate: '2022-11-03 12:00',
      multicompartment: true,
    })
  }
}
