import { Component, OnInit } from '@angular/core';
import { User } from '../user.class';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: User[] = [];
  searchCriteria: string = "";
  sortColumn: string = "id";
  sortAsc: boolean = true;

  constructor(
    private usrsvc: UserService
  ) {}


  selectColumn(col: string): void {
    if(col === this.sortColumn) {
      this.sortAsc = !this.sortAsc;
      return
    }
    this.sortAsc = true;
    this.sortColumn = col;
  }

  ngOnInit(): void {
      this.usrsvc.list().subscribe({
        next: (res) => {
          this.users = res;
          console.debug("Users", res);
        },
        error: (err) => {
          console.error(err);
        }
      })
  }
}
