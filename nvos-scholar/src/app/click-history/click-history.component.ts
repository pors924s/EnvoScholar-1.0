import { Component, OnInit } from "@angular/core";
import { UserService } from "../shared/user.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-click-history",
  templateUrl: "./click-history.component.html",
  styleUrls: ["./click-history.component.css"]
})
export class ClickHistoryComponent implements OnInit {
  userDetails;
  constructor(private userService: UserService, private router: Router) {}

  ngOnInit() {
    this.userService.getUserProfile().subscribe(
      res => {
        this.userDetails = res["user"];
      },
      err => {}
    );
  }

  profile() {
    if (!this.userService.isLoggedIn()) {
      this.router.navigate(["/login"]);
    } else {
      this.router.navigate(["/userprofile"]);
    }
  }

  onLogout() {
    this.userService.deleteToken();
    this.router.navigate(["/login"]);
  }
}
