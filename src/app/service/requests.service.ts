import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const localUrl = './assets/next-up-date.json';

@Injectable({
  providedIn: 'root'
})
export class RequestsService {

  constructor(private http: HttpClient) { }
}
