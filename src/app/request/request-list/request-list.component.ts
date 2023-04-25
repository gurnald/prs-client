import { Component, OnInit } from '@angular/core';
import { Request } from '../request.class';
import { RequestService } from '../request.service';
import { SystemService } from 'src/app/system.service';

@Component({
  selector: 'app-request-list',
  templateUrl: './request-list.component.html',
  styleUrls: ['./request-list.component.css']
})
export class RequestListComponent implements OnInit {

  requests!: Request[];
  searchCriteria: string = "";
  get isAdmin() { return this.sys.isAdmin };

  constructor(
    private sys: SystemService,
    private reqsvc: RequestService
  ) {}

  addUsersUsername(requests: Request[]) {
    for(let r of requests) {
      r.usersUserName = r.usersUserName;
    }
  }

  ngOnInit(): void {
      this.reqsvc.list().subscribe({
        next: (res) => {
          console.debug(res);
          this.requests = res;
        },
        error: (err) => console.error(err)
      });
  }

}
