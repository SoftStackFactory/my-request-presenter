import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-list',
  templateUrl: './main-list.component.html',
  styleUrls: ['./main-list.component.scss']
})
export class MainListComponent implements OnInit {

  // songs = [
  //   {
  //     name: 'Varona',
  //     artist: 'Geographer'
  //   },
  //   {
  //     name: 'Kite',
  //     artist: 'Geographer'
  //   }
  // ]
  timer: any;

  songList=[];
index = 1;
songs = [{
  name: 'Varona',
  artist: 'Geographer'
},
{
  name: 'Kite',
  artist: 'Geographer'
}]



  constructor() { }

  ngOnInit() {
    if( this.songs[0]) { 
        this.songList.push(this.songs[0]);
    }
    this.timer = setInterval(() => {
        if (this.index < this.songs.length) {
           var slist = this.songList.push(this.songs[this.index]);
           this.index++;
           console.log('ads',this.songs)
           
        } else { 
           clearInterval(this.timer);
        }
     }, 4000)
  }

  // getEvents() {

  // }

}
