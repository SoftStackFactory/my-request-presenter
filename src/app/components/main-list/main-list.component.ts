import { Component, OnInit } from '@angular/core';
import { AdsService } from '../../services/ads.service';

@Component({
  selector: 'app-main-list',
  templateUrl: './main-list.component.html',
  styleUrls: ['./main-list.component.scss']
})
export class MainListComponent implements OnInit {

  timer: any;
  adUrl: any;
  songName: any;
  ads: any;

  adList = [];
  index1 = 1;
  index2 = 1;
  
  songs = [{
    name: 'Varona',
    artist: 'Geographer',
    imgUrl: 'assets/img/ad1.jpg'
  },
  {
    name: 'Kite',
    artist: 'Geographer',
    imgUrl: 'assets/img/ad2.jpg'
  },
  {
    name: 'Need Me',
    artist: 'Geographer',
    imgUrl: 'assets/img/ad3.jpg'
  },
  {
    name: 'TOGETHER',
    artist: 'Geographer',
    imgUrl: 'assets/img/ad4.jpg'
  },
]



  constructor(private adsService: AdsService) { }

  ngOnInit() {

    this.adsService.getAds().subscribe((ads: any[]) => {
      console.log('ADS',ads)
      this.adList = ads[0].adImages;
      console.log('ADLIST', this.adList)
      this.timer = setInterval(() => {
        console.log('ADLIST');
        this.adUrl = this.adList[this.index1];
        console.log('list here',this.adUrl);
        if(this.index1 === this.songs.length -1){
          this.index1 = 0
        } else {
          this.index1++;
        }
      }, ads[0].duration * 500);
    })
    this.timer = setInterval(() => {
      //this is just a filler action.  We would actually so something like
      this.songName = this.songs[this.index2].name; //this works and rotates the name properly
        console.log('SONG: ', this.songName)
        if (this.index2 === this.songs.length -1) {
        // if we are at the end of the list start again at the beginning;
          this.index2 = 0;
        } else {
        // else go to next item
          this.index2 ++;
        }
    }, 4000)

    
  }

  // getEvents() {

  // }

}
