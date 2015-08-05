import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';
import 'fetch';

@inject(HttpClient)
export class FlickrSortable{
  heading = 'Flickr';
  images = [];
  url = '/services/feeds/photos_public.gne?tags=mountain&tagmode=any&format=json';

  constructor(http){
    http.configure(config => {
      config
        .useStandardConfiguration()
        .withBaseUrl('https://api.flickr.com');
    });

    this.http = http;
  }

  activate(){
    return this.http.fetch(this.url).then(response => {
      this.images = response.content.items;
    });
  }

  moved() {
  }
}
