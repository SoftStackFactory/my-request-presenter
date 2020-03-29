import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router'

@Component({
  selector: 'app-admin-form-create-event',
  templateUrl: './admin-form-create-event.component.html',
  styleUrls: ['./admin-form-create-event.component.scss']
})
export class AdminFormCreateEventComponent implements OnInit {
  nameFormGroup: FormGroup;
  value = 0;
  value2 = 0;
  thumbLabel = true;
  displayMin = 2;
  freqMin = 10;
  displayMax = 120;
  freqMax = 600;

  constructor(private _formBuilder: FormBuilder, private _router: Router ) { }

  ngOnInit() {
    this.nameFormGroup = this._formBuilder.group({
      eventName: ['', Validators.required]
    })
  }

  

  createEvent(){

  }

  goToManage(){
    this._router.navigate(['/admin-manage'])
  }


}
