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

  /**
   * This function is called whenever a user types a search query in either the homepage
   * or the display results page. It will use an HTTP GET request to the JSON file containing
   * all the article information. The displayresults.component.html file will use interpolation
   * to show the results
   */

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

  /**
   * This function is called whenever a user clicks on a concept that they wish to add to
   * enhance their search. It will replace the search in the url with the concept and load
   * the page with that concept.
   */
  public addConcept(index: number) {
    window.location.href =
      "http://localhost:4200/displayresults?search=" +
      this.response.hits.hits[index]._source.keywords[0].keyword;
  }
  /* SORT */
  //set default
  key: string = '_score';
  //reverse: boolean = false;
  sort(key){
    this.key = key;
    //this.reverse = !this.reverse;
  }

  /**
   * This function is called when the user clicks on Cite. It will create a popup box
   * with the citation for the article.
   */
  toggle_cite(id) {
    var e = document.getElementById(id);
    if (e.style.display == "block") {
      e.style.display = "none";
    } else {
      e.style.display = "block";
    }
  }
}
