import {Component, OnDestroy, OnInit} from '@angular/core';
import {CollectionService} from "../../service/collectionService/collection.service";

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css']
})
export class CollectionComponent implements OnInit, OnDestroy {

  collectionCode?: number;

  constructor(public collectionService: CollectionService) { }

  ngOnInit(): void {
    this.collectionCode = undefined;
  }

  ngOnDestroy() {
    this.collectionService.clearCollectionDataSubject();
  }

  collectPackage() {
    this.collectionService.fetchCollectPackage(this.collectionCode);
  }

}
