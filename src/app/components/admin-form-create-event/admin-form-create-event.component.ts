import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router'
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

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
  images1 = [
    { src : "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/colorful-of-dahlia-pink-flower-in-beautiful-garden-royalty-free-image-825886130-1554743243.jpg?crop=0.669xw:1.00xh;0.331xw,0&resize=640:*"
    },
    {
      src : "https://www.gardendesign.com/pictures/images/263x300Exact_62x0/site_3/helianthus-yellow-flower-pixabay_11863.jpg"
    }
  ]

  images2 = [
    { src : "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/colorful-of-dahlia-pink-flower-in-beautiful-garden-royalty-free-image-825886130-1554743243.jpg?crop=0.669xw:1.00xh;0.331xw,0&resize=640:*"
    },
    {
      src : "https://www.gardendesign.com/pictures/images/263x300Exact_62x0/site_3/helianthus-yellow-flower-pixabay_11863.jpg"
    }
  ]
  eventList = [
    {name: "Event 1"},
    {name: "Event 2"}
  ]

  constructor(private _formBuilder: FormBuilder, private _router: Router ) { }

  ngOnInit() {
    this.nameFormGroup = this._formBuilder.group({
      eventName: ['', Validators.required]

    })
  }

    drop(event: CdkDragDrop<string[]>) {
      if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }

  createEvent(){

  }

  showEventDetails : boolean = false;
  manageButton : boolean = true;
  editingButton : boolean = false;
  disabled: boolean;

  displayOptions(){
    this.showEventDetails = !this.showEventDetails;
    this.manageButton =!this.manageButton;
    this.editingButton =!this.editingButton;
  }
  
  goToManage(){
    this._router.navigate(['/admin-manage'])
  }


}
