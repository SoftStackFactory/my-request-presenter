import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdsService {

  ads = 'assets/ads/ads.json';

  constructor(private httpClient: HttpClient) { }

  getAds() {
    return this.httpClient.get(this.ads); 
  }
}
