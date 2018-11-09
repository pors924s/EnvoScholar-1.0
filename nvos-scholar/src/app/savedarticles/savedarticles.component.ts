import { Component, OnInit } from "@angular/core";
import { UserService } from "../shared/user.service";
import { Router } from "@angular/router";
import { UserProfileComponent } from "../user-profile/user-profile.component";

@Component({
  selector: "app-savedarticles",
  templateUrl: "./savedarticles.component.html",
  styleUrls: ["./savedarticles.component.css"]
})
export class SavedarticlesComponent implements OnInit {
  userDetails;
  constructor(private userService: UserService, private router: Router) {}

  ngOnInit() {
    if (!this.userService.isLoggedIn()) {
      this.router.navigate(["/login"]);
    }
    this.userService.getUserProfile().subscribe(
      res => {
        this.userDetails = res["user"];
      },
      err => {}
    );
  }

  onLogout() {
    this.userService.deleteToken();
    this.router.navigate(["/login"]);
  }

  profile() {
    this.router.navigate(["/userprofile"]);
  }
}
