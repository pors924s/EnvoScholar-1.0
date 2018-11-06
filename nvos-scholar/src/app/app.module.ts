import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { HomepageComponent } from "./homepage/homepage/homepage.component";
import { DisplayresultsComponent } from "./displayresults/displayresults.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { NgxPaginationModule } from "ngx-pagination";
import { OrderModule } from "ngx-order-pipe";
import { ArticleinfoComponent } from "./articleinfo/articleinfo.component";
import { NavbarwithsearchComponent } from "./navbarwithsearch/navbarwithsearch.component";
import { UserComponent } from "./user/user.component";
import { SignUpComponent } from "./user/sign-up/sign-up.component";
import { UserService } from "./shared/user.service";
import { UserProfileComponent } from "./user-profile/user-profile.component";
import { SignInComponent } from "./user/sign-in/sign-in.component";
import { appRoutes } from "./routes";

//Routes

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    DisplayresultsComponent,
    ArticleinfoComponent,
    NavbarwithsearchComponent,
    UserComponent,
    SignUpComponent,
    UserProfileComponent,
    SignInComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxPaginationModule,
    OrderModule
  ],

  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule {}
