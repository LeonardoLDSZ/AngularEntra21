import { Response } from './response';
import { DataService } from './data.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'news-feed';
  response: Response = new Response;

constructor(private dataservice : DataService) {

}

ngOnInit(): void { 
  this.dataservice.getNews().subscribe((data) =>{ 
  console.log(data); 
  this.response = data;
  })
 
}
}
