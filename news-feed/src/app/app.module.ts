import { HttpClientModule } from '@angular/common/http';
import { DataService } from './data.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
     
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,   
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }

