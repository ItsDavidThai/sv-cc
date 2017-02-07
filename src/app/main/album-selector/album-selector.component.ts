import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PlaceholderApiService } from '../placeholder-api.service';
import { Subscription }   from 'rxjs/Subscription';

declare var $;
@Component({
  selector: 'app-album-selector',
  templateUrl: './album-selector.component.html',
  styleUrls: ['./album-selector.component.css']
})
export class AlbumSelectorComponent {
  public albums;
  subscription: Subscription;

  constructor(private placeholderApi: PlaceholderApiService) {
    this.subscription = placeholderApi.albums.subscribe(function(stream){
      console.log(stream)
      this.albums = stream
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
    this.placeholderApi.selectedAlbum.next(albumId)
  }

}
