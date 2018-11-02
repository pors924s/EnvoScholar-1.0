import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { HomepageComponent } from "./homepage/homepage/homepage.component";
import { DisplayresultsComponent } from "./displayresults/displayresults.component";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { NgxPaginationModule } from "ngx-pagination";
import { OrderModule } from "ngx-order-pipe";
import { ArticleinfoComponent } from "./articleinfo/articleinfo.component";
import { NavbarwithsearchComponent } from "./navbarwithsearch/navbarwithsearch.component";

//Routes
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
    path: "article",
    component: ArticleinfoComponent
  },

  {
    /**
     * If a path is entered to the url and it is not defined here
     * then it will default to 'homepage'
     */
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
    ArticleinfoComponent,
    NavbarwithsearchComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule,
    NgxPaginationModule,
    OrderModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
