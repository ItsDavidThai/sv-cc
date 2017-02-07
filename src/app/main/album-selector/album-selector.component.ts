import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { PlaceholderApiService } from '../placeholder-api.service';
import { Subscription }   from 'rxjs/Subscription';
// jquery
declare var $;
/*
  Contains Dropdown with albums titles
*/
@Component({
  selector: 'app-album-selector',
  templateUrl: './album-selector.component.html',
  styleUrls: ['./album-selector.component.css']
})
export class AlbumSelectorComponent {
  public albums;
  public selectedAlbum = {title: 'quidem molestiae enim'};
  subscription: Subscription;

  constructor(private placeholderApi: PlaceholderApiService) {
    // inject shared service and subscribe so that when the service property changes
    // the component's album changes as well
    this.subscription = placeholderApi.albums
    .subscribe(function(stream){
      this.albums = stream
    }.bind(this))

    // materialize js dropdown settings
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
  // when the album is clicked update the components album property
  // and also emit the observable from the service
  albumClicked(albumId){
    console.log(this.albums[albumId - 1], 'id')
    this.selectedAlbum = this.albums[albumId - 1]
    this.placeholderApi.selectedAlbum.next(albumId)
  }
  // unsubscribe all when component is destroyed
  OnDestroy(){
    this.subscription.unsubscribe()
  }
}
