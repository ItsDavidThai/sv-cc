import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PlaceholderApiService } from '../placeholder-api.service';
declare var $;
@Component({
  selector: 'app-album-selector',
  templateUrl: './album-selector.component.html',
  styleUrls: ['./album-selector.component.css']
})
export class AlbumSelectorComponent {
  public albums;
  @Output() selectedAlbumId = new EventEmitter();

  constructor(private placeholderApi: PlaceholderApiService) {
    this.placeholderApi.getAlbums().subscribe(function(res){
      this.albums = res.json()
      console.log(this)
    }.bind(this))

    $('.dropdown-button').dropdown({
        inDuration: 300,
        outDuration: 225,
        constrainWidth: false, // Does not change width of dropdown to that of the activator
        hover: true, // Activate on hover
        gutter: 0, // Spacing from edge
        belowOrigin: false, // Displays dropdown below the button
        alignment: 'left', // Displays dropdown with edge aligned to the left of button
        stopPropagation: false // Stops event propagation
      }
    );
  }
  albumClicked(albumId){
    this.selectedAlbumId.next(albumId)
    console.log(albumId)
  }

}
