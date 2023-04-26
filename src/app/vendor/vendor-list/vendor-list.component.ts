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

  constructor(
    private vndsvc: VendorService
  ) {}

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

