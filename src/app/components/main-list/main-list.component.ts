import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-list',
  templateUrl: './main-list.component.html',
  styleUrls: ['./main-list.component.scss']
})
export class MainListComponent implements OnInit {

  songs = [
    {
      name: 'Varona',
      artist: 'Geographer'
    },
    {
      name: 'Kite',
      artist: 'Geographer'
    }
  ]

  constructor() { }

  ngOnInit() {
    
  }

  // getEvents() {

  // }

}
