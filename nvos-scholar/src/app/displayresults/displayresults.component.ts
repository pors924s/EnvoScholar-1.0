import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-displayresults",
  templateUrl: "./displayresults.component.html",
  styleUrls: ["./displayresults.component.css"]
})
export class DisplayresultsComponent implements OnInit {
  response: any;
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.search();
  }

  search() {
    var Query: string = window.location.search.substring(1).split("=")[1];
    var spacedQuery: string = Query.replace(/%20/gi, " ");
    this.http
      .get(
        "http://crest-cache-01.cs.fiu.edu:81/articles/article/_search?q=" +
          spacedQuery +
          "&size=100"
      )
      .subscribe(response => {
        this.response = response;
        console.log(response);
      });
  }

  public addConcept(index: number) {
    window.location.href =
      window.location +
      " " +
      this.response.hits.hits[index]._source.keywords[0].keyword;
  }
}
