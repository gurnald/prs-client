import { Component, OnInit } from '@angular/core';
import { SystemService } from 'src/app/system.service';
import { RequestService } from '../request.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Request } from '../request.class';
import { Requestline } from 'src/app/requestline/requestline.class';

@Component({
  selector: 'app-request-review-item',
  templateUrl: './request-review-item.component.html',
  styleUrls: ['./request-review-item.component.css']
})
export class RequestReviewItemComponent implements OnInit {

  pageTitle: string ="Request Lines";
  request!: Request;
  showVerifyButton: boolean = false;
  get isAdmin() {
    if(!this.sys.isLoggedIn) {
      return false;
    }
    return this.sys.getLoggedInUser()?.isAdmin;
  }

  constructor(
    private sys: SystemService,
    private reqsvc: RequestService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

    review(): void {
      this.reqsvc.review(this.request).subscribe({
        next: (res) => {
          console.debug("Review:");
          this.refresh();
        },
        error: (err) => console.error(err)
      });
    }
    edit(reqline: Requestline): void {
      this.router.navigateByUrl(`/requestlines/edit/${reqline.id}`);
    }
    remove(reqline: Requestline): void {
      this.reqsvc.remove(reqline.id).subscribe({
        next: (res) => {
          console.debug("Requestline removed");
          this.refresh();
        },
        error: (err) => console.error(err)
      });
    }

    approve(): void {
      this.reqsvc.approve(this.request).subscribe({
        next: (res) => {
          console.debug("Request approved.");
          this.refresh();
        },
        error: (err) => console.error(err)
      });
    }

    reject(): void {
      this.showVerifyButton = !this.showVerifyButton;
    }
    verifyReject(): void {
      this.showVerifyButton = false;
      this.reqsvc.reject(this.request).subscribe({
        next: (res) => {
          console.debug("request rejected.");
          this.refresh();
        },
        error: (err) => console.error(err)
      });
    }

    refresh(): void {
      let id = this.route.snapshot.params["id"];
      this.reqsvc.get(id).subscribe({
        next: (res) => {
          console.debug("request:", res);
          this.request = res;
        },
        error: (err) => console.error(err)
      });
    }

    ngOnInit(): void {
        this.refresh();
    }

}
