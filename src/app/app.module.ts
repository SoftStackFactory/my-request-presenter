import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { TranslocoRootModule } from './transloco-root.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CurrencyPipe,
  CommonModule
} from '@angular/common';
import { AdminFormCreateEventComponent } from './components/admin-form-create-event/admin-form-create-event.component';
import { DragDropModule } from '@angular/cdk/drag-drop'
import { MainListComponent } from './components/main-list/main-list.component';
import { NextUpComponent } from './components/next-up/next-up.component';
import {
  MatButtonModule,
  MatTabsModule,
  MatStepperModule,
  MatFormFieldModule,
  MatSliderModule,
  MatCardModule,
  MatInputModule,
  MatGridListModule,
} from '@angular/material';



@NgModule({
  declarations: [
    AppComponent,
    AdminFormCreateEventComponent,
    MainListComponent,
    NextUpComponent,
    AdminFormCreateEventComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    TranslocoRootModule,
    MatInputModule,
    MatGridListModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatTabsModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    MatSliderModule,
    FormsModule,
    DragDropModule,
    MatCardModule,
    CommonModule
  ],
  providers: [CurrencyPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
