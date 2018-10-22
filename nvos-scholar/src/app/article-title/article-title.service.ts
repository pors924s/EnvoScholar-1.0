import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class ArticleTitleService {
  getTitle(): string[] {
    return ["ArticleTitle"];
  }
}
