import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router, NavigationExtras } from "@angular/router";

@Component({
  selector: "app-displayresults",
  templateUrl: "./displayresults.component.html",
  styleUrls: ["./displayresults.component.css"]
})
export class DisplayresultsComponent implements OnInit {
  response: any;
  constructor(private http: HttpClient, private router: Router) {}

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
    var query: string = window.location.search.substring(1).split("=")[1];
    this.http
      .get(
        "http://crest-cache-01.cs.fiu.edu:81/articles/article/_search?q=" +
          query +
          "&size=100"
      )
      .subscribe(response => {
        //Set this.response to the JSON file
        this.response = response;
        //Set this.article_info to the JSON file to be sent to another component through the ArticleInformationService
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
  key: string = "_score";
  //reverse: boolean = false;
  sort(key) {
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

  getDate(year: number) {
    var i: number;
    var date: string[] = new Array(100);
    for (i = 0; i < 100; i++) {
      if (
        this.response.hits.hits[i]._source.cover_date.includes(year) === true
      ) {
        date[i] = this.response.hits.hits[i]._source.cover_date;
      }
    }
    console.log(date);
  }

  /**
   * This function is called when a user clicks on an article link in display results. It sets the article index to the article_info to be called in the articleinfo
   */
  navigate(i: number) {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        article_title: this.response.hits.hits[i]._source.title
      }
    };
    this.router.navigate(["article"], navigationExtras);
  }
}
