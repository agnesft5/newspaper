import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-v-home',
  templateUrl: './v-home.component.html',
  styleUrls: ['./v-home.component.css']
})
export class VHomeComponent implements OnInit{

  categories = this._data.categories;
  topHeadlines: any;

  constructor(public _data: DataService) {

    this.topHeadlines = this._data.topHeadlines;

  }

  ngOnInit():void {
    httpGet() {
      this._data.httpGet("https://cors-anywhere.herokuapp.com/https://newsapi.org/v2/top-headlines?country=us&apiKey=6d1e9f0531774a84b98ac454cd66deb4");
    }

  }



}
