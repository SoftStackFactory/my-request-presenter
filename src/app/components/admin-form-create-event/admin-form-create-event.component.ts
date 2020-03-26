import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-admin-form-create-event',
  templateUrl: './admin-form-create-event.component.html',
  styleUrls: ['./admin-form-create-event.component.scss']
})
export class AdminFormCreateEventComponent implements OnInit {
  nameFormGroup: FormGroup;
  
  constructor(private _formBuilder: FormBuilder ) { }

  ngOnInit() {
    this.nameFormGroup = this._formBuilder.group({
      eventName: ['', Validators.required]
    })
  }

  

  createEvent(){

  }


}
