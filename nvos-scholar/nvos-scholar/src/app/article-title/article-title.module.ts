import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ArticleTitleComponent } from "./article-title/article-title.component";

@NgModule({
  imports: [CommonModule],
  declarations: [ArticleTitleComponent],
  exports: [ArticleTitleComponent]
})
export class ArticleTitleModule {}
