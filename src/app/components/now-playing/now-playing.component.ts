import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-now-playing',
  templateUrl: './now-playing.component.html',
  styleUrls: ['./now-playing.component.scss']
})
export class NowPlayingComponent implements OnInit {

  // @Input() artist: string;
  // @Input() song: string;
  // @Input() amount: number;
  // @Input() memo: string;

  // hard coded for now. 
  song = 'iusto qui accusantium';
  artist = 'Richard Port Velvahaven';
  memo = 'Illum consectetur ullam quasi.';
  amount = 30.33;

  constructor() { }

  ngOnInit() {
  }

}

