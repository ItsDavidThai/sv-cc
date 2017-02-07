import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-gallery-display',
  templateUrl: './gallery-display.component.html',
  styleUrls: ['./gallery-display.component.css']
})
export class GalleryDisplayComponent implements OnInit {
  @Input() album;
  constructor() { }

  ngOnInit() {
  }
  selectedAlbumIdEventListener(){
    console.log('album selected')
  }

}
