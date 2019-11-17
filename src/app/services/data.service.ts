import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject, BehaviorSubject, ReplaySubject } from 'rxjs';
import { Observable } from 'rxjs'


@Injectable({
  providedIn: 'root'
})
export class DataService {

  categories: string[] = ["business", "entertainment", "general", "healt", "science", "sports", "technology"]
  topHeadlines: Subject<object> = new Subject<object>();
  everything: Subject<object> = new Subject<object>();
  savedForLater: Subject<object> = new Subject<object>();
  savedDataArray: BehaviorSubject<object[]> = new BehaviorSubject<object[]>([]);

  article: BehaviorSubject<object> = new BehaviorSubject <object>({});



  constructor(public _http: HttpClient) {

    
  }

  httpGetTop() {
    this._http.get('https://cors-anywhere.herokuapp.com/https://newsapi.org/v2/top-headlines?country=us&apiKey=6d1e9f0531774a84b98ac454cd66deb4', {
      headers: new HttpHeaders({ "x-requested-witdh": "XMLHResponse" })
    }).subscribe(
      (result) => {
        this.topHeadlines.next(result)
      }
    )
  }

  httpGetAll() {
    this._http.get('https://cors-anywhere.herokuapp.com/https://newsapi.org/v2/everything?domains=wsj.com,nytimes.com&lenguage=en&apiKey=6d1e9f0531774a84b98ac454cd66deb4', {
      headers: new HttpHeaders({ "x-requested-witdh": "XMLHResponse" })
    }).subscribe(
      (result) => {
        this.everything.next(result)
      }
    )
  }

  saveData(report: object, i: number): void {
    this.savedForLater.next(report)
    console.log(this.savedDataArray)
  }

  changeArticle(report:object){
    this.article.next(report)
  }

  

}
