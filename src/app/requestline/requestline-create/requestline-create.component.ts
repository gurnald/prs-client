import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SystemService } from 'src/app/system.service';
import { RequestlineService } from '../requestline.service';
import { Requestline } from '../requestline.class';
import { Product } from 'src/app/product/product.class';
import { ProductService } from 'src/app/product/product.service';

@Component({
  selector: 'app-requestline-create',
  templateUrl: './requestline-create.component.html',
  styleUrls: ['./requestline-create.component.css']
})
export class RequestlineCreateComponent implements OnInit {
  
  requestline: Requestline = new Requestline();
  products!: Product[];
  reqlId: number = 0;

  constructor(
    private reqlsvc: RequestlineService,
    private prdsvc: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) {}


  save(): void {
    this.requestline.requestId = +this.reqlId;
    this.requestline.productId = +this.requestline.productId;
    console.log(this.requestline)
    this.reqlsvc.create(this.requestline).subscribe({
      next: (res) => {
        console.debug("Requestline Added");
        this.router.navigateByUrl(`/request/lines/${this.reqlId}`);
      },
      error: (err) => {
        console.error(err);
      }
    });
  }
  ngOnInit(): void {
    this.reqlId = this.route.snapshot.params["id"];
    this.prdsvc.list().subscribe({
      next: (res) => {
        console.debug("Products:", res);
        this.products = res;
      },
      error: (err) => {
        console.error(err);
      }

    });
      
  }

}
