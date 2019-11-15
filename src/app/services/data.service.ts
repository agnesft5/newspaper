import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  categories: string[] = ["business", "entertainment", "general", "healt", "science", "sports", "technology"]
  topHeadlines: any;

  constructor(public _http: HttpClient) {


  }

  httpGet(url) {
    this._http.get(url, {
      headers: new HttpHeaders({ "x-requested-witdh": "XMLHResponse" })
    }).subscribe(
      (result) => {
        this.topHeadlines = result
        console.log(this.topHeadlines)
      }
    )
  }



}
