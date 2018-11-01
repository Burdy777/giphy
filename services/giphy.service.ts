import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/operators';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GiphyService {
private API_KEY_GIPHY = 'NwN9H5yVM8wIc2nUG8rLXXlBq1BBjaDB';
private data = [];
private API_KEY = '8644d9a9';
private API_URL = '//www.omdbapi.com';

constructor(private http: HttpClient) { }

  public mapGif(data) {
    const images = data['data'];
        for (let i = 0; i < images.length; i++) {
          const img = images[i]['images']['fixed_height']['url'];
          this.data.push(img);
        }
        return this.data;
  }

  getGifs(): Observable<any> {
    const params = new HttpParams()
    .set('q', 'cheeseburgers')
    .set('limit', '5')
    .set('api_key', this.API_KEY_GIPHY);
    return this.http.get('//api.giphy.com/v1/stickers/search', {params})
    .pipe(
      map(data => this.mapGif(data))
    );
}

public getMovie() {
  const option = {
     params: new HttpParams()
    .set('apikey', this.API_KEY)
    .set('i', 'tt3896198')
  };
  return this.http.get(`${this.API_URL}`,  option );
}

}
