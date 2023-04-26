import { Pipe, PipeTransform } from "@angular/core";
import { Product } from "./product.class";


@Pipe({
    name: 'productSearch'
})
export class ProductSearchPipe implements PipeTransform {


    transform(products: Product[], searchCriteria: string = ""): Product[] {
        if(searchCriteria === "") {
            return products;
          
    }
    let selectedProducts: Product[] = [];
    searchCriteria = searchCriteria.toLowerCase();
    for(let product of products) {
        if(
            product.prtNbr.toLowerCase().includes(searchCriteria)
            || product.name.toLowerCase().includes(searchCriteria)
        ) {
            selectedProducts.push(product);
        }
    }
    return selectedProducts;
}
}