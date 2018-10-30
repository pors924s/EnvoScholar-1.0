import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs/internal/BehaviorSubject";

@Injectable({
  providedIn: "root"
})
export class ArticleInformationService {
  private user = new BehaviorSubject<string>("john");
  cast = this.user.asObservable();
  constructor() {}

  editUser(newUser) {
    this.user.next(newUser);
  }
}
