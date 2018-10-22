import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ArticleYearComponent } from "./article-year/article-year.component";

@NgModule({
  imports: [CommonModule],
  declarations: [ArticleYearComponent],
  exports: [ArticleYearComponent]
})
export class ArticleYearModule {}
