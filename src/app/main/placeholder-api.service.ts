import { Injectable } from '@angular/core';
import { Http, RequestOptions, URLSearchParams } from '@angular/http';
import { Subject }    from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject'


@Injectable()
export class PlaceholderApiService {
  public albums = new Subject<Array<Object>>();
  public selectedAlbum =  new BehaviorSubject(1);
  public selectedPhotos = new BehaviorSubject<Array<Object>>([]);
  constructor(private http: Http) {
    this.getAlbums()
    this.getPhotos()
    this.selectedAlbum.subscribe(function(stream){
      this.getPhotos()
    }.bind(this))
  }
  getAlbums(){
    this.http.get('https://jsonplaceholder.typicode.com/albums')
    .subscribe(function(res){
      this.albums.next(res.json())
      console.log(this.albums)
    }.bind(this))
  }
  getPhotos(){
    var searchParams = new URLSearchParams()
    searchParams.set('albumId', String(this.selectedAlbum.value))
    var options = new RequestOptions({
      search:searchParams
    })
    console.log(String(this.selectedAlbum.value))
    this.http.get('https://jsonplaceholder.typicode.com/photos', options)
    .subscribe(function(res){
      this.selectedPhotos.next(res.json())
      console.log(this.selectedPhotos.value)
    }.bind(this))
  }


}
