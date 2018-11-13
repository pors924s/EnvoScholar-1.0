import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { UserService } from "../shared/user.service";
import { Router } from "@angular/router";
import { NgForm } from "@angular/forms";
import { User } from "../shared/user.model";

@Component({
  selector: "app-articleinfo",
  templateUrl: "./articleinfo.component.html",
  styleUrls: ["./articleinfo.component.css"]
})
export class ArticleinfoComponent implements OnInit {
  response: any;
  article_info: any;
  article_title: any;
  concepts: any;
  authors: any;
  article: any;
  year: any;
  url: any;
  abstract: any;
  userDetails;
  query: string = window.location.search.substring(1).split("=")[1];
  selectedUser: User = {
    fullName: "",
    email: "",
    password: "",
    articles: [],
    search: []
  };
  constructor(
    private http: HttpClient,
    private userService: UserService,
    private router: Router
  ) {}
  ngOnInit() {
    this.http
      .get(
        "http://crest-cache-01.cs.fiu.edu:81/articles/article/_search?q=" +
          this.query
      )
      .subscribe(response => {
        //Set this.response to the JSON file
        this.response = response;
        //Set this.article_info to the JSON file to be sent to another component through the ArticleInformationService
        console.log(response);
        this.article = this.response.hits.hits[0];
        this.article_title = this.article._source.title;
        this.authors = this.article._source.authors;
        this.year = this.article._source.cover_date;
        this.url = this.article._source.url;
        this.abstract = this.article._source.abstract;
        this.concepts = this.article._source.keywords;
      });
  }

  //Click Article Website to open the link on a new page
  articleURL(url: string) {
    window.open(url, "_blank");
  }

  saveArticle(
    title: string,
    authors: Array<string>,
    year: string,
    abstract: string
  ) {
    var articleInfo = {
      articles: { title, authors, year, abstract }
    };
    this.userService.getUserProfile().subscribe(
      res => {
        this.userDetails = res["user"];
        this.userService.addArticle(articleInfo).subscribe();
      },
      err => {}
    );
  }

  toggle_cite(id) {
    var e = document.getElementById(id);
    if (e.style.display == "block") {
      e.style.display = "none";
    } else {
      e.style.display = "block";
    }
  }

  share(id) {
    var e = document.getElementById(id);
    if (e.style.display == "block") {
      e.style.display = "none";
    } else {
      e.style.display = "block";
    }
  }
}
