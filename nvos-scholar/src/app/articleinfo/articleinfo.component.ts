import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-articleinfo",
  templateUrl: "./articleinfo.component.html",
  styleUrls: ["./articleinfo.component.css"]
})
export class ArticleinfoComponent implements OnInit {
  article_info: any;
  constructor(private route: ActivatedRoute) {
    this.article_info = this.route.queryParams.subscribe(params => {
      console.log(params);
    });
  }
  ngOnInit() {}
}
