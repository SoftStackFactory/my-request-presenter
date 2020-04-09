import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { TranslocoRootModule } from './transloco-root.module';
import { CurrencyPipe } from '@angular/common';
import {MatGridListModule} from '@angular/material/grid-list';



import {MatInputModule} from '@angular/material/input';
import { MainListComponent } from './components/main-list/main-list.component';


@NgModule({
  declarations: [
    AppComponent,
    MainListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    TranslocoRootModule,
    MatInputModule,
    MatGridListModule
  ],
  providers: [CurrencyPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
