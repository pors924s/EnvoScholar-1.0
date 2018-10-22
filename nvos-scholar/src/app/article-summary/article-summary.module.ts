import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ArticleSummaryComponent } from "./article-summary/article-summary.component";

@NgModule({
  imports: [CommonModule],
  declarations: [ArticleSummaryComponent],
  exports: [ArticleSummaryComponent]
})
export class ArticleSummaryModule {}
