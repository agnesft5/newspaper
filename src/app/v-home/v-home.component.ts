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
  // savedArticleTop: number[] = [];
  // savedArticleAll: number[] = [];
  includedTop: boolean = false;
  includedAll: boolean = false;
  selectedArticleTop: number;
  selectedArticleAll: number;
  initialAll: number = 0;
  finalAll: number = 15;
  initialTop: number = 0;
  finalTop: number = 15;

  subscription1: Subscription;
  subscription2: Subscription;
  subscription3: Subscription;
  subscription4: Subscription;
  subscription5: Subscription;

  articlesTop: object[];
  articlesAll: object[];

  savedForLater: object;
  savedDataArray: object[];


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
    if (reports == this.articlesAll && index >= this.initialAll && index < this.finalAll) {
      return true;
    } else if (reports == this.articlesTop && index >= this.initialTop && index < this.finalTop) {
      return true;
    } else {
      return false;
    }
  }
  next(reports, element) {
    if (reports == this.articlesAll) {
      console.log(this.articlesAll.length)
      if (this.initialAll < this.articlesAll.length && this.initialAll >= 0 && this.finalAll < this.articlesAll.length) {
        this.initialAll += 15;
        this.finalAll += 15;
        element.scrollTo(0, 0);
        window.scrollTo(0, 0);
      } else {
        this.initialAll = 0;
        this.finalAll = 15;
        element.scrollTo(0, 0);
        window.scrollTo(0, 0);
      }

    } else if (reports == this.articlesTop) {
      console.log(this.articlesTop.length)
      if (this.initialTop < this.articlesTop.length && this.initialTop >= 0 && this.finalTop < this.articlesTop.length) {
        this.initialTop += 15;
        this.finalTop += 15;
        element.scrollTo(0, 0);
        window.scrollTo(0, 0);
      } else {
        this.initialTop = 0;
        this.finalTop = 15;
        element.scrollTo(0, 0);
        window.scrollTo(0, 0);
      }
    }
  }

  previous(reports, element) {
    if (reports == this.articlesAll) {
      console.log(this.articlesAll.length)
      if (this.initialAll > 0 && this.initialAll < this.articlesAll.length && this.finalAll >= 15) {
        this.initialAll -= 15;
        this.finalAll -= 15;
        element.scrollTo(0, 0);
        window.scrollTo(0, 0);
      } else {
        this.initialAll = 0;
        this.finalAll = 15;
        element.scrollTo(0, 0);
        window.scrollTo(0, 0);
      }

    } else if (reports == this.articlesTop) {
      console.log(this.articlesTop.length)
      if (this.initialTop > 0 && this.initialTop < this.articlesTop.length && this.finalTop >= 15) {
        this.initialTop -= 15;
        this.finalTop -= 15;
        element.scrollTo(0, 0);
        window.scrollTo(0, 0);
      } else {
        this.initialTop = 0;
        this.finalTop = 15;
        element.scrollTo(0, 0);
        window.scrollTo(0, 0);
      }
    }
  }

  saveForLater(report, index, type) {
    if (type == "top") {
      this.includedTop = true;
      this.selectedArticleTop = index;
    } else if (type == "all") {
      this.includedAll = true;
      this.selectedArticleAll = index;
    } else {
      this.includedAll = false;
      this.includedTop = false;
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

  scroll(element: HTMLElement) {
    element.scrollTo(0, 0)
  }

  changeCategory(value, element) {
    this.category = value;
    this.changeUrl();
    window.scrollTo(0, 0)
    this.scroll(element)
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
