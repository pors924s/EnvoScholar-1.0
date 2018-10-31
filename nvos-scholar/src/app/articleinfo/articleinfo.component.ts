import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ArticleInformationService } from "../article_information/article-information.service";

@Component({
  selector: "app-articleinfo",
  templateUrl: "./articleinfo.component.html",
  styleUrls: ["./articleinfo.component.css"]
})
export class ArticleinfoComponent implements OnInit {
  article_info: any;
  article_id: any;
  article_index: number;
  concepts: any;
  authors: any;
  article: any;
  constructor(
    private route: ActivatedRoute,
    article_information: ArticleInformationService
  ) {
    this.article_id = this.route.queryParams.subscribe(params => {
      console.log(params);
    });
    this.article_id = this.article_id._subscriptions[0].subject._value.article_id;
    this.article_info = article_information.getJSONData();
    this.article_index = article_information.getArticleIndex();

    var i: number = 0;
    for (i = 0; i < this.article_info.hits.hits.length; i++) {
      if (this.article_info.hits.hits[i]._id == this.article_id) {
        this.article = this.article_info.hits.hits[i];
      }
    }
    console.log(this.article);
    //console.log(this.article_info);
    this.authors = this.article._source.authors;
    this.concepts = this.article._source.keywords;
  }
  ngOnInit() {}

  //Click Article Website to open the link on a new page
  articleURL(url: string) {
    window.open(url, "_blank");
  }
}
