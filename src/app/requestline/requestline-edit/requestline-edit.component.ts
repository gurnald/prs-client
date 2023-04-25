import { Component } from '@angular/core';
import { SystemService } from 'src/app/system.service';
import { RequestlineService } from '../requestline.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Requestline } from '../requestline.class';
import { Product } from 'src/app/product/product.class';
import { ProductService } from 'src/app/product/product.service';

@Component({
  selector: 'app-requestline-edit',
  templateUrl: './requestline-edit.component.html',
  styleUrls: ['./requestline-edit.component.css']
})
export class RequestlineEditComponent {

  requestline!: Requestline;
  products!: Product[];

  constructor(
    private sys: SystemService,
    private reqlsvc: RequestlineService,
    private prdsvc: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  save(): void {
    this.requestline.productId = +this.requestline.productId;
    this.reqlsvc.change(this.requestline).subscribe({
      next: (res) => {
        console.debug("Requestline added");
        this.router.navigateByUrl(`/request/lines${this.requestline.requestId}`);
      },
      error: (err) => console.error(err)
    });
  }

  ngOnInit(): void {
      this.prdsvc.list().subscribe({
        next: (res) => {
          console.debug("Products:", res);
          this.products = res;
        },
        error: (err) => console.error(err)
      });
      let id = +this.route.snapshot.params["id"];
      this.reqlsvc.get(id).subscribe({
        next: (res) => {
          console.debug("Requestline:", res);
          this.requestline = res;
        },
        error: (err) => console.error(err)
      });
  }

}

