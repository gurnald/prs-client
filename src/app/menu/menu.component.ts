import { Component, OnInit } from '@angular/core';
import { Menu } from './menu.class';
import { SystemService } from '../system.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  get username() {
    if(!this.sys.isLoggedIn) {
      return "[]";
    }
    return `[${this.sys.getLoggedInUser()?.username}]`;
  }

  menus: Menu[] = [
    new Menu("Home", "/home"),
    new Menu("About", "/about"),
    
    new Menu("Users", "/user/list"),
    new Menu("Vendors", "/vendor/list"),
    new Menu("Products", "/product/list"),
    new Menu("Requests", "/request/list"),
    new Menu("Reviews", "/request/review"),
    new Menu("Login", "/user/login"),
  ];

  constructor(
    private sys: SystemService
  ) {}

  ngOnInit(): void {
      
  }

}
