import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-homepage",
  templateUrl: "./homepage.component.html",
  styleUrls: ["./homepage.component.css"]
})
export class HomepageComponent implements OnInit {
  searchQuery: String = "";
  response: any;
  constructor(private http: HttpClient) {}

  ngOnInit() {}

  /**
   * This function is called whenever a user types a search query in either the homepage
   * or the display results page. It will use an HTTP GET request to the JSON file containing
   * all the article information. The displayresults.component.html file will use interpolation
   * to show the results
   */
  search() {
    this.http
      .get(
        "http://crest-cache-01.cs.fiu.edu:81/articles/article/_search?q=" +
          this.searchQuery
      )
      .subscribe(response => {
        this.response = response;
      });
  }
}
