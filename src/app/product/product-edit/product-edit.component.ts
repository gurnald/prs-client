import { Component, OnInit } from '@angular/core';
import { Product } from '../product.class';
import { Vendor } from 'src/app/vendor/vendor.class';
import { ProductService } from '../product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { VendorService } from 'src/app/vendor/vendor.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  product!: Product;
  vendors!: Vendor[];

  constructor(
    private prdsvc: ProductService,
    private vndsvc: VendorService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  save(): void {
    this.product.vendorId = +this.product.vendorId
    this.prdsvc.change(this.product).subscribe({
      next: (res) => {
        console.debug("Product Updated");
        this.router.navigateByUrl("/product/list");
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  ngOnInit(): void {
    this.vndsvc.list().subscribe({
      next: (res) => {
        console.debug("Customers", res);
        this.vendors = res;
      },
      error: (err) => { console.error(err); }
    });
    let id = +this.route.snapshot.params["id"];
    this.prdsvc.get(id).subscribe({
      next: (res) => {
        console.debug("Vendors:", res);
        this.product = res;
      },
      error: (err) => {
        console.error(err);
      }
    })
}


}

