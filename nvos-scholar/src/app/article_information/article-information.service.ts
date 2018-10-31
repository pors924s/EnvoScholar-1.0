import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class ArticleInformationService {
  jsonData = {};
  articleIndex;
  constructor() {}

  //Set JSON file
  setJSONData(val: any) {
    this.jsonData = val;
  }

  //Get JSON file
  getJSONData() {
    return this.jsonData;
  }

  //Set article index from displayresults.component
  setArticleIndex(index: number) {
    this.articleIndex = index;
  }

  //Get article index from displayresults.component
  getArticleIndex() {
    return this.articleIndex;
  }
}
