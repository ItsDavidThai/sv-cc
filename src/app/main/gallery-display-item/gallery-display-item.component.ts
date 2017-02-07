import { Component, OnInit, Input } from '@angular/core';
/*
  this component renders a single photo from an album
*/
@Component({
  selector: 'app-gallery-display-item',
  templateUrl: './gallery-display-item.component.html',
  styleUrls: ['./gallery-display-item.component.css']
})
export class GalleryDisplayItemComponent {
  // used for parent->child interaction
  @Input() photoData;
  constructor() {

  }
}
