import { Injectable } from '@angular/core';
import {CollectionModel} from "../../model/collection.model";
import {BehaviorSubject, Observable, of, take} from "rxjs";

@Injectable()
export class CollectionService {
  collectionDataSubject: BehaviorSubject<CollectionModel | null> = new BehaviorSubject<CollectionModel | null>(null);

  fetchCollectPackage(collectionCode?: number): void {
    if(collectionCode === undefined) {
      return;
    }
    this.collectPackage(collectionCode).pipe(take(1)).subscribe( data => {
      this.collectionDataSubject.next(data);
    });
  }

  clearCollectionDataSubject() {
    this.collectionDataSubject.next(null);
  }

  private collectPackage(collectionCode?: number): Observable<CollectionModel> {
    return of({
      qrcode: '/image/abc.svg',
      expirationDate: '2022-11-03 12:00',
      multicompartment: true,
    })
  }
}
