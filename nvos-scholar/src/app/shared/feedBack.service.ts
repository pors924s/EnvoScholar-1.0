import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { environment } from "../../environments/environment";
import { Feedback } from "./feedBack.model";

@Injectable({
  providedIn: "root"
})
export class FeedbackService {
  selectedFeeback: Feedback = {
    question1: [],
    question2: []
  }
  
  constructor(private http: HttpClient) {}

  //HttpMethods
  question1(answer: object) {
    return this.http.post(environment.apiBaseUrl + "/question1", answer);
  }

  question2(answer: object) {
    return this.http.post(environment.apiBaseUrl + "/question2", answer);
  }

}
