import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CampaignsService {

  constructor(private _http : HttpClient) { }
  events: any = [];

  getCampaigns(){
    this._http.get("assets/events/fakerdata.json").subscribe(data =>{
      console.log(data);
      this.events = data;
    })
  }


}
