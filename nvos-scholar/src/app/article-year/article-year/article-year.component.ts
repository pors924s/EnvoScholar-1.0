import { Component, OnInit } from "@angular/core";
import { ArticleYearService } from "../article-year.service";

@Component({
  selector: "app-article-year",
  template: `<p *ngFor="let articleYear of articleYears">
  {{articleYear}}
</p>`,
  providers: [ArticleYearService]
})
export class ArticleYearComponent implements OnInit {
  articleYears;
  constructor(articleYearService: ArticleYearService) {
    this.articleYears = articleYearService.getYear();
  }

  ngOnInit() {}
}
