import { Component, OnInit } from '@angular/core';
import { Product } from '../product.class';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[] = [];
  searchCriteria: string = "";
  sortColumn: string = "id";
  sortAsc: boolean = true;

  constructor(
    private prdsvc: ProductService
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
      this.prdsvc.list().subscribe({
        next: (res) => {
          this.products = res;
          console.debug("Products", res);
        },
        error: (err) => {
          console.error(err);
        }
      })
  }
}
