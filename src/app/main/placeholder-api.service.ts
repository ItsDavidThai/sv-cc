import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class PlaceholderApiService {

  constructor(private http: Http) {

  }

  getAlbums(){
    return this.http.get('https://jsonplaceholder.typicode.com/albums')
  }


}
