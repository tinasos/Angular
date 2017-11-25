import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatToolbarModule, } from '@angular/material';
import {MatCardModule} from '@angular/material/card';
import { AppComponent } from './app.component';
import { MyNewCardComponent } from './my-new-card/my-new-card.component';


@NgModule({
  declarations: [
    AppComponent,
    MyNewCardComponent
  ],
  
  imports: [
    BrowserModule,
    MatToolbarModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
