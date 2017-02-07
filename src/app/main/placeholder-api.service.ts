import { Injectable } from '@angular/core';
import { Http, RequestOptions, URLSearchParams } from '@angular/http';
import { Subject }    from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject'

/*
  This service acts as the communication between sibling components: Album Selector and Gallery Display
*/
@Injectable()
export class PlaceholderApiService {
  // rxjs observables to track when a new album is selected and which photo and album are selected
  public albums = new Subject<Array<Object>>();
  public selectedAlbum =  new BehaviorSubject(1);
  public selectedPhotos = new BehaviorSubject<Array<Object>>([]);

  constructor(private http: Http) {
    // send requests to get photos and albums from api endpoint
    this.getAlbums()
    this.getPhotos()
    // track when a new album is selected to update photos
    this.selectedAlbum.subscribe(function(stream){
      this.getPhotos()
    }.bind(this))
  }
  // http get request to albums
  getAlbums(){
    this.http.get('https://jsonplaceholder.typicode.com/albums')
    .subscribe(function(res){
      this.albums.next(res.json())
    }.bind(this))
  }
  // http get request to photos
  getPhotos(){
    var searchParams = new URLSearchParams()
    searchParams.set('albumId', String(this.selectedAlbum.value))
    var options = new RequestOptions({
      search:searchParams
    })
    this.http.get('https://jsonplaceholder.typicode.com/photos', options)
    .subscribe(function(res){
      this.selectedPhotos.next(res.json())
    }.bind(this))
  }


}
