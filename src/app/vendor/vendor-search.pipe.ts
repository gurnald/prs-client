import { Pipe, PipeTransform } from "@angular/core";
import { Vendor } from "./vendor.class";




@Pipe({
    name: 'VendorSearch'
})
export class VendorSearchPipe implements PipeTransform {


    transform(vendors: Vendor[], searchCriteria: string = ""): Vendor[] {
        if(searchCriteria === "") {
            return vendors;
          
    }
    let selectedVendors: Vendor[] = [];
    searchCriteria = searchCriteria.toLowerCase();
    for(let vendor of vendors) {
        if(
            vendor.code.toLowerCase().includes(searchCriteria)
            || vendor.name.toLowerCase().includes(searchCriteria)
            || vendor.city.toLowerCase().includes(searchCriteria)
            || vendor.state.toLowerCase().includes(searchCriteria)
        ) {
            selectedVendors.push(vendor);
        }
    }
    return selectedVendors;
}
}