import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import {MatButtonModule, MatFormFieldModule, MatInputModule, MatRippleModule} from '@angular/material'
import {MatFormFieldModule, MatInputModule} from '@angular/material';
import { ReactiveFormsModule, FormControl, Validators } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { TranslocoRootModule } from './transloco-root.module';
import { HomeComponent } from './home/home.component';
import { from } from 'rxjs';
import { CurrencyPipe } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    TranslocoRootModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    
  ],
  
  providers: [CurrencyPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
