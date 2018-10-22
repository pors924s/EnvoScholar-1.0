import { Component, OnInit } from "@angular/core";
import { ArticleSummaryService } from "../article-summary.service";

@Component({
  selector: "app-article-summary",
  template: `<p *ngFor="let articleSummary of articleSummaries">
  {{articleSummary}}
</p>`,
  providers: [ArticleSummaryService]
})
export class ArticleSummaryComponent implements OnInit {
  articleSummaries;
  constructor(articleSummaryService: ArticleSummaryService) {
    this.articleSummaries = articleSummaryService.getSummary();
  }

  ngOnInit() {}
}
