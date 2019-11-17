import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../services/data.service';


@Component({
  selector: 'app-v-saved',
  templateUrl: './v-saved.component.html',
  styleUrls: ['./v-saved.component.css']
})
export class VSavedComponent implements OnInit {

  category: any;

  articles: object[];
  article: object;

  constructor(public _data:DataService, public _path:ActivatedRoute) {

    this.category = this._data.category;


  }

  ngOnInit() {
    this.articles = JSON.parse(localStorage.getItem("articles"));
  }

}
