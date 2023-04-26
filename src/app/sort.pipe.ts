import { Pipe, PipeTransform } from "@angular/core";


@Pipe ({
    name: 'sort'
})

export class sortPipe implements PipeTransform {

    transform(arr: any[], column: string = "id", asc: boolean = true): any[] {

        const sortME = (a: any, b: any): number => {
            let x = typeof a[column] === "number" ? a[column] : a[column].toString().toUpperCase();
            let y = typeof a[column] === "number" ? b[column] : b[column].toString().toUpperCase();
            if(x === y) return 0;
            if(asc){
                return(x > y) ? 1 : -1;
            }else{ 
                return(x > y) ? -1 : 1;
            }
        }
        return arr.sort(sortME);
    }
}