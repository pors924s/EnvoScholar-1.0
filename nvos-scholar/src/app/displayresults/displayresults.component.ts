import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router, NavigationExtras } from "@angular/router";
import * as $ from 'jquery';
import { convertInjectableProviderToFactory } from "@angular/core/src/di/injectable";
import { isUndefined, isNullOrUndefined } from "util";


@Component({
  selector: "app-displayresults",
  templateUrl: "./displayresults.component.html",
  styleUrls: ["./displayresults.component.css"]
})
export class DisplayresultsComponent implements OnInit {
  //=============Inialize Variables=============//
  response: any;
  //list of articles after date filter in getDate()
  editedResponse: any;
  //articles sent to user on results page
  finalResponse: any;
  //list of articles after date filter in search()
  filteredDate: any;
  //saves articles before filters
  originalResponse: any;
  responseLength: number;
  defaultMinYear: number = 1900;
  defaultMaxYear: number = 2018;
  x: number = 0;
  numArticles: number = 100;
  filter: boolean = false;
  query: string = window.location.search.substring(1).split("=")[1];
  specifyWebsite: number;




  constructor(private http: HttpClient, private router: Router) {}



  //=======================WHEN PAGE LOADS=======================//
  ngOnInit() {
    this.search(0, null);
    //this.academicSearch();
  }


  //====================BEGIN filter info via JSON file====================//
  myParams = {
    "query": {
        "range" : {
            "cover_date" : {
                "gte": "2010-01-01T00:00:00.000Z", 
                "lte": "2016-01-01T00:00:00.000Z" 
            }
        }
    }
  };
  //========= cURL command that works=========//
  /*curl -X GET "http://crest-cache-01.cs.fiu.edu:81/articles/article/_search" -H 'Content-Type: application/json' -d'
    {
        "query": {
            "range" : {
                "cover_date" : {
                    "gte": "2015-01-01T00:00:00.000Z", 
                    "lte": "now"
                }
            }
        }
    }
    '*/
  dateEncoded = $.param(this.myParams);
  dateDecoded = decodeURIComponent(this.dateEncoded);
  //====================END filter info via JSON file====================//



  //========================PULL SEARCH RESULTS FROM DATABASE========================//
  /**
   * This function is called whenever a user types a search query in either the homepage
   * or the display results page. It will use an HTTP GET request to the JSON file containing
   * all the article information. The displayresults.component.html file will use interpolation
   * to show the results
   */
  search(flag, filteredDate) {
    this.http
      .get(
        "http://crest-cache-01.cs.fiu.edu:81/articles/article/_search?q="+ this.query + "&" + /*this.dateEncoded +*/ "&size=" + this.numArticles
        
      )
      .subscribe(response => {
        //Set this.response to the JSON file
        this.response = response; 
        //Set this.article_info to the JSON file to be sent to another component through the ArticleInformationService
        
        //Keeps original response
        if(this.x == 0){
          this.originalResponse = this.response.hits.hits;
          this.x++;
        }
        this.response.hits.hits = this.originalResponse;
        if(flag == 0){
          this.finalResponse = this.response.hits.hits;
        }
      });
      if(flag != 0){
        this.finalResponse = filteredDate;
      }
      
  }
  /*
  academicSearch() {
    this.http
      .get(
        "https://westus.api.cognitive.microsoft.com/academic/v1.0/evaluate?expr=" + this.query
        
      )
      .subscribe(response => {
        //Set this.response to the JSON file
        this.response = response; 
        console.log(this.response);
      });
      
      
  }*/

  website(specifyWebsite){
    alert("You are about to be directed to a different webpage.")
    if(specifyWebsite == 0)
      return "https://academic.microsoft.com/#/search?iq=%40" + this.query + "%40&q=" + this.query + "&filters=&from=0&sort=0";
    else
      return "https://www.semanticscholar.org/search?q=" + this.query + "&sort=relevance";
  }


  //========================CONCEPTS========================//
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


  //====================SORT===================//
  //set default
  key: string = "_score";
  sort(key) {
    this.key = key;
  }

  //====================CITE====================//
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

  //=================DATE FILTER=================//
  //Filter by date range, specify min year and max year
  getDate(minYear,maxYear) {
    var i: number = 0;
    var j: number = 0;
    var z: number = 0;
    var articleIndex: number[] = new Array(this.originalResponse.length);

    if(minYear == '' && maxYear == ''){
      minYear = 1900;
      maxYear = 2018;
    }
    else if(minYear == ''){
      minYear = 1900;
    }
    else if(maxYear == ''){
      maxYear = 2018;
    }
    else{
      this.checkRange(minYear);
      this.checkRange(maxYear);
    }
    
    
    
    for (i = 0; i < this.originalResponse.length; i++) {
      if (this.response.hits.hits[i]._source.cover_date.substr(0,4) >= minYear && this.response.hits.hits[i]._source.cover_date.substr(0,4) <= maxYear) {
        articleIndex[z] = i;
        z++;
      }
    }

    var finalArticleIndex: number[] = new Array(z);
    var editedResponse: any[] = new Array(z);
    this.numArticles = z;

    //Creates new response with only articles within the date range
    for(j = 0; j < z; j++){
      //articleIndex has empty indices, new array fits all values exactly
      finalArticleIndex[j] = articleIndex[j];
      editedResponse[j] = this.response.hits.hits[finalArticleIndex[j]];

    }
    if(editedResponse.length == 0){
      alert("No results for date range: " + minYear + " to " + maxYear + ".\nPlease Specify a different range." );
    }
    else{
      this.search(1, editedResponse);
      this.filter = true;
    }

    
  }

  checkRange(year){
    if((year < 1900 || year > 2018) && year != '' && year != null){
      alert("Year: '" + year + "' is out of range");
    }
  }

  //==================CLEAR FILTER==================//
  clearFilters(){
    this.getDate(1900,2018);
  }

  //=======================ARTICLE=======================//
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
  //============TEST TO CONSOLE============//
  toConsole(){
    console.log('You done testedededed it');
  }
}


