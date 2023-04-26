import { Component, OnInit } from '@angular/core';
import { Vendor } from '../vendor.class';
import { ActivatedRoute, Router } from '@angular/router';
import { VendorService } from '../vendor.service';

@Component({
  selector: 'app-vendor-detail',
  templateUrl: './vendor-detail.component.html',
  styleUrls: ['./vendor-detail.component.css']
})
export class VendorDetailComponent implements OnInit {

  vendor!: Vendor;
  showVerifyButton: boolean = false;

  constructor(
    private vndsvc: VendorService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  remove(): void {
    this.showVerifyButton = !this.showVerifyButton;
  }

  verifyremove(): void {
    this.showVerifyButton = false;
    this.vndsvc.remove(this.vendor.id).subscribe({
      next: (res) => {
        console.debug("Vendor is deleted!");
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
          console.debug("Vendor:", res);
          this.vendor = res;
        },
        error: (err) => {
          console.error(err);
        }
      });
  }

}

