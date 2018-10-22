import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ArticleAuthorComponent } from "./article-author/article-author.component";

@NgModule({
  imports: [CommonModule],
  declarations: [ArticleAuthorComponent],
  exports: [ArticleAuthorComponent]
})
export class ArticleAuthorModule {}
