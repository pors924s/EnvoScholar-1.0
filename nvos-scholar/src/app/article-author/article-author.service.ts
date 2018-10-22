import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class ArticleAuthorService {
  getAuthor(): string[] {
    return ["ArticleAuthor"];
  }
}
