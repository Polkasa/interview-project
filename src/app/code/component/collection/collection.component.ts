import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css']
})
export class CollectionComponent implements OnInit {

  collectionCode?: number;

  constructor() { }

  ngOnInit(): void {
    this.collectionCode = undefined;
  }

  collectPackage() {
    
  }

}
