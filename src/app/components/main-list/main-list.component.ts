import { Component, OnInit } from '@angular/core';
import { AdsService } from '../../services/ads.service';

@Component({
  selector: 'app-main-list',
  templateUrl: './main-list.component.html',
  styleUrls: ['./main-list.component.scss']
})
export class MainListComponent implements OnInit {

  timer: any;

  songList=[];
  adList = [];
  index = 1;
  songs = [{
    name: 'Varona',
    artist: 'Geographer'
  },
  {
    name: 'Kite',
    artist: 'Geographer'
  }]



  constructor(private adsService: AdsService) { }

  ngOnInit() {
    this.adsService.getAds().subscribe((ads: any[]) => {
      console.log('ADS',ads);
      this.adList = ads;
    })
    this.timer = setInterval(() => {
      //this is just a filler action.  We would actually so something like
      // this.adUrl = this.ads[this.index].url
        console.log(this.songs[this.index].name)
        if (this.index === this.songs.length -1) {
        // if we are at the end of the list start again at the beginning;
          this.index = 0;
        } else {
        // else go to next item
          this.index ++;
        }
    }, 4000)
  }

  // getEvents() {

  // }

}
