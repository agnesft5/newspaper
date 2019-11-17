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

  categories = this._data.categories;
  topHeadlines: any; //data
  everything: any //data

  subscription1: Subscription;
  subscription2: Subscription;
  subscription3: Subscription;
  subscription4: Subscription;

  articlesTop: object[];
  articlesAll: object[];

  savedForLater: object;
  savedDataArray: object[];

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
        console.log(this.savedForLater)
        console.log(this.savedDataArray)
        if (typeof (Storage) !== 'undefined') {
          localStorage.setItem("articles", JSON.stringify(this.savedDataArray))
        }


      })

    this.subscription4 = this._data.savedDataArray.subscribe(
      (newValue) => {
        this.savedDataArray = newValue;

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
    this._data.saveData(report, index)
  }

  deleteReport(index) {
    this.savedDataArray.splice(index,1);
    if (typeof (Storage) !== 'undefined') {
      localStorage.setItem("articles", JSON.stringify(this.savedDataArray))
    }
  }

  ngOnInit() {
    this._data.httpGetTop()
    this._data.httpGetAll()

    if (JSON.parse(localStorage.getItem("articles")) !== null) {
      this.savedDataArray = JSON.parse(localStorage.getItem("articles"))
    } else {
      this.savedDataArray = []
    }


  }

}
