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
  showEventDetails : boolean = false;
  manageButton : boolean = true;
  editingButton : boolean = false;
  disabled: boolean;
  event: any;
  // currentCampaignImages: any = [];
  // currentGalleryImages: any= [];


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


  
  
 
  displayOptions(arg){
    this.showEventDetails = !this.showEventDetails;
    this.manageButton =!this.manageButton;
    this.editingButton =!this.editingButton;
    this.event = arg;
    this.nameFormGroup.patchValue({
      arg});
    console.log(this.event.campaignImages)
    // this.currentCampaignImages = [...this.event.campaignImages]
    // this.currentGalleryImages = [...this.event.galleryImages ]
    

    }
    // status: boolean = false;
    // clickEvent(){
      
    //   this.status = !this.status;  
      

    // }

    gallery = [
      {
        id: 1, 
        path: 'https://www.gardendesign.com/pictures/images/263x300Exact_62x0/site_3/helianthus-yellow-flower-pixabay_11863.jpg'
      },
        {
        id: 2, 
        path: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/colorful-of-dahlia-pink-flower-in-beautiful-garden-royalty-free-image-825886130-1554743243.jpg',
      },
        {
        id: 3, 
        path: 'https://www.gardendesign.com/pictures/images/263x300Exact_62x0/site_3/helianthus-yellow-flower-pixabay_11863.jpg'
      },
    ];

    campaignImages;

    selectedImages = {};


  onSelect({id, path}) {
    if (this.selectedImages[id]) {
      delete this.selectedImages[id]
    } else {
      this.selectedImages[id] = path;
    }
    this.campaignImages = Object.values(this.selectedImages)
  }
    
  
  }


