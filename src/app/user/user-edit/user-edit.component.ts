import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../user.class';
import { UserService } from '../user.service'

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  user!: User;

  constructor(
    private usrsvc: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  save(): void {
    this.usrsvc.change(this.user).subscribe({
      next: (res) => {
        console.debug("User Updated");
        this.router.navigateByUrl("/user/list");
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  ngOnInit(): void {
    let id = +this.route.snapshot.params["id"];
    this.usrsvc.get(id).subscribe({
      next: (res) => {
        console.debug("Users", res);
        this.user = res;
      },
      error: (err) => {
        console.error(err);
      }
    });
}


}
