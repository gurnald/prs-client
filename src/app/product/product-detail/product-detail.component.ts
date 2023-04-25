import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';
import { Product } from '../product.class';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {

  product!: Product;
  showVerifyButton: boolean = false;

  constructor(
    private prdsvc: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  remove(): void {
    this.showVerifyButton = !this.showVerifyButton;
  }

  verifyremove(): void {
    this.showVerifyButton = false;
    this.prdsvc.remove(this.product.id).subscribe({
      next: (res) => {
        console.debug("Product is deleted!");
        this.router.navigateByUrl("/product/list");
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  ngOnInit(): void {
      let id = +this.route.snapshot.params["id"];
      this.prdsvc.get(id).subscribe({
        next: (res) => {
          console.debug("Product:", res);
          this.product = res;
        },
        error: (err) => {
          console.error(err);
        }
      });
  }

}

