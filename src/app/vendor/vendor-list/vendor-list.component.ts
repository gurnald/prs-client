import { Component } from '@angular/core';
import { Vendor } from '../vendor.class';
import { VendorService } from '../vendor.service';

@Component({
  selector: 'app-vendor-list',
  templateUrl: './vendor-list.component.html',
  styleUrls: ['./vendor-list.component.css']
})
export class VendorListComponent {

  vendors: Vendor[] = [];
  searchCriteria: string = "";
  sortColumn: string = "id";
  sortAsc: boolean = true;

  constructor(
    private vndsvc: VendorService
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
      this.vndsvc.list().subscribe({
        next: (res) => {
          this.vendors = res;
          console.debug("Vendors", res);
        },
        error: (err) => {
          console.error(err);
        }
      })
  }
}

