import { Component, OnInit } from '@angular/core';
import { SystemService } from 'src/app/system.service';
import { RequestService } from '../request.service';
import { Request } from '../request.class';

@Component({
  selector: 'app-request-reviews',
  templateUrl: './request-reviews.component.html',
  styleUrls: ['./request-reviews.component.css']
})
export class RequestReviewsComponent implements OnInit {

  requests!: Request[];
  get isAdmin() {return this.sys.isAdmin; }
  
  searchCriteria: string = "";

  constructor(
    private sys: SystemService,
    private reqsvc: RequestService
  ) {}

  addUserUsername(requests: Request[]) {
    for(let r of requests) {
      r.usersUserName = r.usersUserName;
    }
  }

  ngOnInit(): void {
      this.sys.chkLogin();
      let userId = this.sys.getLoggedInUser()!.id;
      this.reqsvc.reviews(userId).subscribe({
        next: (res) => {
          this.addUserUsername(res);
          console.debug(res);
          this.requests = res;
        },
        error: (err) => console.error(err)
      });
  }
}
