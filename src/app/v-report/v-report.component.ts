import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
// import { runInThisContext } from 'vm';

@Component({
  selector: 'app-v-report',
  templateUrl: './v-report.component.html',
  styleUrls: ['./v-report.component.css']
})
export class VReportComponent implements OnInit {

  i: number;
  type: string;
  noticias: any;

  articles: object[] = []
  article: object;

  subscriptionTop: Subscription;
  articlesTop: object[];
  articleTop: object;

  subscriptionAll: Subscription;
  articlesAll: object[];
  articleAll: object;



  subscriptionSaved: Subscription;
  savedReports: object[]
  savedReport: object;

  category: string;
  subscription5: Subscription;
  cat: string;

  constructor(public _data: DataService, public _path: ActivatedRoute) {



    this.article = {}

    this.subscriptionTop = this._path.params.subscribe(
      (newValue) => {
        this.i = newValue.i;
        this.type = newValue.type



        if (this.type === "top") {
          this.articlesTop = this._data.arrTopHeadlines["articles"]
          this.article = this.articlesTop[this.i]
        }
        
        if (this.type === "all") {
          this.articlesAll = this._data.arrEverything["articles"]
          this.article = this.articlesAll[this.i]
        }
        

        if (this.type === "saved") {
          this.articles = this._data.getSavedArticles();
          this.article = this.articles[this.i]
        }
      })


/*
    this.subscriptionTop = this._data.topHeadlines.subscribe(
      (newValue) => {
        this.noticias = newValue
        if (this.type === "top") {
          this.articlesTop = this.noticias["articles"]
          this.articleTop = this.articlesTop[this.i]
          this.article = this.articleTop;
        }
        console.log("hola")
        console.log(this.article, "top")
      })

    this.subscriptionAll = this._path.params.subscribe(
      (newValue) => {
        this.i = newValue.i;
        this.type = newValue.type;
      })
    this.subscriptionAll = this._data.everything.subscribe(
      (newValue) => {
        this.noticias = newValue
        if (this.type === "all") {
          this.articlesAll = this.noticias["articles"]
          this.articleAll = this.articlesAll[this.i]
          this.article = this.articleAll;
        }

        console.log(this.article, "all")
      }
    )


    this.subscriptionSaved = this._path.params.subscribe(
      (newValue) => {
        this.i = newValue.i;
        this.type = newValue.type;
        if (this.type === "saved") {
          this.savedReports = JSON.parse(localStorage.getItem("articles"))
          this.savedReport = this.savedReports[this.i]
          this.article = this.savedReport;
          console.log(this.article)
        }
        console.log(this.article, "saved")
      })
*/

    //this.category = this._data.category

  }


  ngOnInit() {
    //this.cat = this._data.cat
  //  this._data.httpGetTop(`https://cors-anywhere.herokuapp.com/https://newsapi.org/v2/top-headlines?country=us&category=${this.cat}&apiKey=6d1e9f0531774a84b98ac454cd66deb4`)
   // this._data.httpGetAll()
  }

}
