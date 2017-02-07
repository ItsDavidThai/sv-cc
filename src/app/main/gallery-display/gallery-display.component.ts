import { Component, OnInit, Input } from '@angular/core';
import { PlaceholderApiService } from '../placeholder-api.service';
/*
  This component holds photos from selected album
*/
@Component({
  selector: 'app-gallery-display',
  templateUrl: './gallery-display.component.html',
  styleUrls: ['./gallery-display.component.css']
})
export class GalleryDisplayComponent {
  public selectedAlbumId;
  public selectedPhotos;
  constructor(public placeholderApiService: PlaceholderApiService) {
    // subscribe to shared service properties and when a new album is selected
    // update photos
    this.placeholderApiService.selectedAlbum.subscribe(function(stream){
      this.selectedAlbumId = stream;
    }.bind(this))

    this.placeholderApiService.selectedPhotos.subscribe(function(stream){
      this.selectedPhotos = stream;
    }.bind(this))
  }

}
