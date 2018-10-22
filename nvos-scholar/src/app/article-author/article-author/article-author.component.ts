import { Component, OnInit } from "@angular/core";
import { ArticleAuthorService } from "../article-author.service";

@Component({
  selector: "app-article-author",
  template: `<p *ngFor="let articleAuthor of articleAuthors">
  {{articleAuthor}}
</p>`,
  providers: [ArticleAuthorService]
})
export class ArticleAuthorComponent implements OnInit {
  articleAuthors;
  constructor(articleAuthorService: ArticleAuthorService) {
    this.articleAuthors = articleAuthorService.getAuthor();
  }

  ngOnInit() {}
}
