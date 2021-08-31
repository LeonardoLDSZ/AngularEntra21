import { HttpClientModule } from '@angular/common/http';
import { DatabeerService } from './databeer.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule    
  ],
  providers: [DatabeerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
