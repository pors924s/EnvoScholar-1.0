import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { HomepageComponent } from "./homepage/homepage/homepage.component";
import { ArticleTitleModule } from "./article-title/article-title.module";
import { DisplayresultsComponent } from "./displayresults/displayresults.component";
import { ArticleAuthorModule } from "./article-author/article-author.module";
import { ArticleYearModule } from "./article-year/article-year.module";
import { ArticleSummaryModule } from "./article-summary/article-summary.module";
import { FormsModule } from "@angular/forms";
import { ArticleComponent } from "./article/article.component";
import { OntologyComponent } from "./ontology/ontology/ontology.component";
import { HttpClientModule } from "@angular/common/http";
import { NgxPaginationModule } from 'ngx-pagination'
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { OrderModule } from 'ngx-order-pipe';

const routes: Routes = [
  {
    path: "homepage",
    component: HomepageComponent
  },
  {
    path: "displayresults",
    component: DisplayresultsComponent
  },
  {
    path: "ontology",
    component: OntologyComponent
  },
  {
    path: "",
    redirectTo: "homepage",
    pathMatch: "full"
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    DisplayresultsComponent,
    ArticleComponent,
    OntologyComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    ArticleAuthorModule,
    ArticleTitleModule,
    ArticleYearModule,
    ArticleSummaryModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    OrderModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
