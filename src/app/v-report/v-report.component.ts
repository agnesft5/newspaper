import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-v-report',
  templateUrl: './v-report.component.html',
  styleUrls: ['./v-report.component.css']
})
export class VReportComponent implements OnInit {

  i: number;
  noticias: any;

  articles: object[] = []
  article: object;

  subscription1: Subscription;
  articlesTop: object[];
  articleTop: object;

  subscription2: Subscription;
  articlesAll: object[];
  articleAll: object;



  subscription3: Subscription;

  savedForLater: object;
  savedDataArray: object[];

  savedReports: object[]
  savedReport: object;

  subscription4: Subscription;

  categories: string[] = this._data.categories

  constructor(public _data: DataService, public _path: ActivatedRoute) {

    this.article = {}

    this.subscription1 = this._path.params.subscribe((newValue) => {
      this.i = newValue.i;
    })
    this.subscription1 = this._data.topHeadlines.subscribe(
      (newValue) => {
        this.noticias = newValue
        this.articlesTop = this.noticias["articles"]
        this.articleTop = this.articlesTop[this.i]
        this.changeArticle(this.articleTop)
        console.log(this.article, "top")
      })

    this.subscription2 = this._path.params.subscribe(
      (newValue) => {
        this.i = newValue.i;
      })
    this.subscription2 = this._data.everything.subscribe(
      (newValue) => {
        this.noticias = newValue
        this.articlesAll = this.noticias["articles"]
        this.articleAll = this.articlesAll[this.i]
        this.changeArticle(this.articleAll)
        console.log(this.article, "all")
      }
    )


    this.subscription3 = this._path.params.subscribe(
      (newValue) => {
        this.i = newValue.i;
        this.savedReports = JSON.parse(localStorage.getItem("articles"))
        this.savedReport = this.savedReports[this.i]
        this.changeArticle(this.savedReport)
        console.log(this.article, "saved")
      })


    this.subscription4 = this._data.article.subscribe(
      (newValue) => {
        this.article = newValue;
      }
    )


  }

  changeArticle(report: object) {
    this._data.changeArticle(report)
  }

  ngOnInit() {
    this._data.httpGetTop()
    this._data.httpGetAll()
  }

}
