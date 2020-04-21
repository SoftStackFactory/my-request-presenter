import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router'
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { CampaignsService } from '../../../app/campaigns.service'

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
  


  constructor(private _formBuilder: FormBuilder, private _router: Router, private _campaigns: CampaignsService) { }


  ngOnInit() {
    this._campaigns.getCampaigns()


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

  showEventDetails : boolean = false;
  manageButton : boolean = true;
  editingButton : boolean = false;
  disabled: boolean;
  event: any;
  currentCampaignImages: any = [];
  currentGalleryImages: any= [];

 
  displayOptions(arg){
    this.showEventDetails = !this.showEventDetails;
    this.manageButton =!this.manageButton;
    this.editingButton =!this.editingButton;
    this.event = arg;
    this.nameFormGroup.patchValue({
      arg});
    console.log(this.event.campaignImages)
    this.currentCampaignImages = [...this.event.campaignImages]
    this.currentGalleryImages = [...this.event.galleryImages ]
    

    }
  }


