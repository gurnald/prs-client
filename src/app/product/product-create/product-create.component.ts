import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { VendorService } from 'src/app/vendor/vendor.service';
import { Router } from '@angular/router';
import { Product } from '../product.class';
import { Vendor } from 'src/app/vendor/vendor.class';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  product: Product = new Product();
  vendors!: Vendor[];

  constructor(
    private prdsvc: ProductService,
    private vndsvc: VendorService,
    private router: Router
  ) {}


  save(): void {
    this.product.vendorId = +this.product.vendorId;
    this.prdsvc.create(this.product).subscribe({
      next: (res) => {
        console.debug("Product Added");
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
        console.debug("Vendors:", res);
        this.vendors = res;
      }
    })
      
  }

}

