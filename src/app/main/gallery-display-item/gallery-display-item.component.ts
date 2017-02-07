import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-gallery-display-item',
  templateUrl: './gallery-display-item.component.html',
  styleUrls: ['./gallery-display-item.component.css']
})
export class GalleryDisplayItemComponent implements OnInit {
  @Input() photoData;
  constructor() {

  }

  ngOnInit() {
  }

}
