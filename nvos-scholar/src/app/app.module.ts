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
import { environment } from "../environments/environment";
import { AngularFireModule } from "angularfire2";
import { UserComponent } from "./database/user.component";

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
    path: "login",
    component: UserComponent
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
    NavbarwithsearchComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule,
    NgxPaginationModule,
    OrderModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyBzgXD1z-522yRtB-6doRmBRSBtwbyIBew",
      authDomain: "nvos-scholar.firebaseapp.com",
      databaseURL: "https://nvos-scholar.firebaseio.com",
      projectId: "nvos-scholar",
      storageBucket: "nvos-scholar.appspot.com",
      messagingSenderId: "923631814596"
    })
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
