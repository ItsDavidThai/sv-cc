import { Component, OnInit, Input } from '@angular/core';
import { PlaceholderApiService } from '../placeholder-api.service';

@Component({
  selector: 'app-gallery-display',
  templateUrl: './gallery-display.component.html',
  styleUrls: ['./gallery-display.component.css']
})
export class GalleryDisplayComponent implements OnInit {
  public selectedAlbumId;
  public selectedPhotos;
  constructor(public placeholderApiService: PlaceholderApiService) {
    this.placeholderApiService.selectedAlbum.subscribe(function(stream){
      this.selectedAlbumId = stream;
      console.log(stream, 'got to gallary')
    }.bind(this))
    this.placeholderApiService.selectedPhotos.subscribe(function(stream){
      this.selectedPhotos = stream;
      console.log(this.selectedPhotos, 'photos arrived' )
    }.bind(this))
  }

  ngOnInit() {
  }

}
