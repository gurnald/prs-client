import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Vendor } from '../vendor.class';
import { VendorService } from '../vendor.service';

@Component({
  selector: 'app-vendor-edit',
  templateUrl: './vendor-edit.component.html',
  styleUrls: ['./vendor-edit.component.css']
})
export class VendorEditComponent implements OnInit {

  vendor!: Vendor;

  constructor(
    private vndsvc: VendorService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  save(): void {
    this.vndsvc.change(this.vendor).subscribe({
      next: (res) => {
        console.debug("Vendor Updated");
        this.router.navigateByUrl("/vendor/list");
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  ngOnInit(): void {
    let id = +this.route.snapshot.params["id"];
    this.vndsvc.get(id).subscribe({
      next: (res) => {
        console.debug("Vendors", res);
        this.vendor = res;
      },
      error: (err) => {
        console.error(err);
      }
    });
}


}

