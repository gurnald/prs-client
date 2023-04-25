import { Component } from '@angular/core';
import { SystemService } from 'src/app/system.service';
import { RequestService } from '../request.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Request } from '../request.class';

@Component({
  selector: 'app-request-detail',
  templateUrl: './request-detail.component.html',
  styleUrls: ['./request-detail.component.css']
})
export class RequestDetailComponent {

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

  remove(): void {
    this.showVerifyButton = !this.showVerifyButton;
  }

  verifyRemove(): void {
    this.showVerifyButton = false;
    this.reqsvc.remove(this.request.id).subscribe({
      next: (res) => {
        console.debug("Request deleted!");
        this.router.navigateByUrl("/request/list");
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  ngOnInit(): void {
      let id = +this.route.snapshot.params["id"];
      this.reqsvc.get(id).subscribe({
        next: (res) => {
          console.debug("Users", res);
          this.request = res;
        },
        error: (err) => {
          console.error(err);
        }
      });
  }

}

