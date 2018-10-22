import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http"

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  userName: String = "";
  response: any;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    
  }

  search(){
   this.http.get('http://crest-cache-01.cs.fiu.edu:81/articles/article/_search?q=' + this.userName)
   .subscribe((response) => {
     this.response = response;
     console.log(this.response);
     console.log(this.userName);
   })
  }
}
