import { Component } from '@angular/core';
import { Beer } from './beer';
import { DatabeerService } from './databeer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'beer-app';
  beer : Beer[] = [];

  constructor (private databeerservice : DatabeerService){

  }
  ngOnInit(): void {
   
    this.databeerservice.getBeer().subscribe((data) => {
      console.log(data);
      this.beer = data;
    })
  }
}
