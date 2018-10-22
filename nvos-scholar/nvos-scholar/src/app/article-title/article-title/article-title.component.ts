import { Component, OnInit } from "@angular/core";
import { ArticleTitleService } from "../article-title.service";

@Component({
  selector: "app-article-title",
  template: `<p *ngFor="let articleTitle of articleTitles">
  {{articleTitle}}
</p>`,
  providers: [ArticleTitleService]
})
export class ArticleTitleComponent implements OnInit {
  articleTitles;
  constructor(articleTitleService: ArticleTitleService) {
    this.articleTitles = articleTitleService.getTitle();
  }

  ngOnInit() {}
}
