import { Component, OnInit, Input } from '@angular/core';
import { Request } from '../../interfaces/request';

@Component({
  selector: 'app-next-up',
  templateUrl: './next-up.component.html',
  styleUrls: ['./next-up.component.scss']
})
export class NextUpComponent implements OnInit {
  @Input() request: Request;
  @Input() place: number;

  constructor() { }

  ngOnInit() {
  }

}
