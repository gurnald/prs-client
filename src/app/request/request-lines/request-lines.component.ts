import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RequestlineService } from 'src/app/requestline/requestline.service';
import { RequestService } from '../request.service';
import { Request } from '../request.class';

@Component({
  selector: 'app-request-lines',
  templateUrl: './request-lines.component.html',
  styleUrls: ['./request-lines.component.css']
})
export class RequestLinesComponent implements OnInit {
  request!: Request;


  constructor(
    private reqsvc: RequestService,
    private route: ActivatedRoute,
    private reqlsvc: RequestlineService
  ) {}

  review(id: number): void {
    this.reqsvc.review(this.request).subscribe({
      next: (res) => {
        console.debug("Request Reviewed");
        console.debug(res)
        this.refresh();
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  remove(id: number): void {
    this.reqlsvc.remove(id).subscribe({
      next: (res) => {
        console.debug("Line Deleted");
        this.refresh();
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  refresh(): void {
    let id = this.route.snapshot.params["id"];
    this.reqsvc.get(id).subscribe({
      next: (res) => {
        this.request = res
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  ngOnInit(): void {
      this.refresh();
  }

}