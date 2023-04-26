import {Vendor} from "../vendor/vendor.class";

export class Product {
    id: number = 0;
    prtNbr: string = "";
    name: string = "";
    price: number = 0;
    unit: string = "";
    photoPath: string | null = "";

    vendorId: number = 0;
    vendor!: Vendor; 
}