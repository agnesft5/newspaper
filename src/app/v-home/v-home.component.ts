import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Subject, Subscription } from 'rxjs'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-v-home',
  templateUrl: './v-home.component.html',
  styleUrls: ['./v-home.component.css']
})
export class VHomeComponent implements OnInit {

  category: string = "general";
  topHeadlines: any; //data
  everything: any //data
  openedTrue: boolean = false;
  savedArticle: number[] = [];
  included: boolean = false;
  selectedArticle: number;

  subscription1: Subscription;
  subscription2: Subscription;
  subscription3: Subscription;
  subscription4: Subscription;
  subscription5: Subscription;

  articlesTop: object[];
  articlesAll: object[];

  savedForLater: object;
  savedDataArray: object[];

  style: object = { "color": "black" }

  url: string;


  constructor(public _data: DataService, public _path: ActivatedRoute) {



    this.subscription1 = this._data.topHeadlines.subscribe(
      (newValue) => {
        this.topHeadlines = newValue
        this.articlesTop = this.topHeadlines["articles"]
      })

    this.subscription2 = this._data.everything.subscribe((newValue) => {
      this.everything = newValue
      this.articlesAll = this.everything["articles"]
    })

    this.subscription3 = this._data.savedForLater.subscribe(
      (newValue) => {
        this.savedForLater = newValue
        this.savedDataArray.push(this.savedForLater)
        if (typeof (Storage) !== 'undefined') {
          localStorage.setItem("articles", JSON.stringify(this.savedDataArray))
        }


      })

  }

  showArticle(reports, index) {
    if (index < 15) {
      return true;
    } else {
      return false;
    }
  }

  saveForLater(report, index) {
    //this.style = { "color": "#888" }
    this.savedArticle.push(index);
    if (this.savedArticle.includes(index)) {
      this.included = true;
      this.selectedArticle = index;
    } else {
      this.included = false;
    }
    this._data.saveData(report, index);
  }

  deleteReport(index) {
    this.savedDataArray.splice(index, 1);
    if (typeof (Storage) !== 'undefined') {
      localStorage.setItem("articles", JSON.stringify(this.savedDataArray))
    }
  }


  openSelect() {
    if (this.openedTrue == false) {
      this.openedTrue = true
    } else {
      this.openedTrue = false;
    }
  }

  changeUrl() {
    this.url = `https://cors-anywhere.herokuapp.com/https://newsapi.org/v2/top-headlines?country=us&category=${this.category}&apiKey=6d1e9f0531774a84b98ac454cd66deb4`;
    this._data.httpGetTop(this.url)
  }

  changeCategory(value) {
    this.category = value;
    this.changeUrl();
  }

  ngOnInit() {
    this._data.httpGetTop(`https://cors-anywhere.herokuapp.com/https://newsapi.org/v2/top-headlines?country=us&category=${this.category}&apiKey=6d1e9f0531774a84b98ac454cd66deb4`)
    this._data.httpGetAll()

    if (JSON.parse(localStorage.getItem("articles")) !== null) {
      this.savedDataArray = JSON.parse(localStorage.getItem("articles"))
    } else {
      this.savedDataArray = []
    }


  }

}
