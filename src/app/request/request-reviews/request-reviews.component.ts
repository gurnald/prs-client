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
  sortColumn: string = "id";
  sortAsc: boolean = true;
  
  constructor(
    private sys: SystemService,
    private reqsvc: RequestService
  ) {}

  selectColumn(col: string): void {
    if(col === this.sortColumn) {
      this.sortAsc = !this.sortAsc;
      return
    }
    this.sortAsc = true;
    this.sortColumn = col;
  }

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
