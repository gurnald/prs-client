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
  sortColumn: string = "id";
  sortAsc: boolean = true;
  get isAdmin() { return this.sys.isAdmin };

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
