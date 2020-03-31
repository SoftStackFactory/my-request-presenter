import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-next-up',
  templateUrl: './next-up.component.html',
  styleUrls: ['./next-up.component.scss']
})
export class NextUpComponent implements OnInit {
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
