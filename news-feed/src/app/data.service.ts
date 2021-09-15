import { Response } from './response';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  API_KEY = 'e40d07f00b094602953cc3bf8537477e';

  constructor( private HttpClient: HttpClient) { }

  getNews(){
    return this.HttpClient.get<Response>(`https://newsapi.org/v2/everything?q=DevOps&sortBy=popularity&apiKey=${this.API_KEY}`);
  }
}
