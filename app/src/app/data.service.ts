import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  API_KEY = 'e40d07f00b094602953cc3bf8537477e';

  constructor( private HttpClient: HttpClient) { }

  getNews(){
    return this.HttpClient.get(`https://newsapi.org/v2/everything?q=DevOps&sortBy=popularity&apiKey=${this.API_KEY}`);
  }
}

// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Feed } from './feed';

// @Injectable({
//   providedIn: 'root'
// })
// export class DataService {

//   API_KEY = 'e40d07f00b094602953cc3bf8537477e';

//   constructor(private httpClient: HttpClient) { }

//   getNews(){
//     return this.httpClient.get<Feed>(`https://newsapi.org/v2/everything?q=DevOps&sortBy=popularity&apiKey=${this.API_KEY}`);
//   }
// }