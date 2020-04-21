import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { TranslocoRootModule } from './transloco-root.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CurrencyPipe } from '@angular/common';
import { NextUpComponent } from './components/next-up/next-up.component';
import { MatCardModule } from '@angular/material/card';
import { AdminFormCreateEventComponent } from './components/admin-form-create-event/admin-form-create-event.component';
import { MatButtonModule, MatTabsModule, MatStepperModule, MatFormFieldModule, MatInputModule, MatSliderModule } from '@angular/material';
import { AdminFormManageEventComponent } from './components/admin-form-manage-event/admin-form-manage-event.component';
import { DragDropModule } from '@angular/cdk/drag-drop'

@NgModule({
  declarations: [
    AppComponent,
    NextUpComponent,
    AppComponent,
    AdminFormCreateEventComponent,
    AdminFormManageEventComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    TranslocoRootModule,
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
  ],
  providers: [CurrencyPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
