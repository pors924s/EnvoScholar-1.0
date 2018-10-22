import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class ArticleYearService {
  getYear(): string[] {
    return ["ArticleYear"];
  }
}
