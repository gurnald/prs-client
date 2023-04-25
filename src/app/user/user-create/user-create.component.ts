import { Component, OnInit } from '@angular/core';
import { User } from '../user.class';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {

  user: User = new User();

  constructor(
    private usrsvc: UserService,
    private router: Router
  ) {}


  save(): void {
    this.usrsvc.create(this.user).subscribe({
      next: (res) => {
        console.debug("User Added");
        this.router.navigateByUrl("/user/list");
      },
      error: (err) => {
        console.error(err);
      }
    });
  }
  ngOnInit(): void {
      
  }

}
