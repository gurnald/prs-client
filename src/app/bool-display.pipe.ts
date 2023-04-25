import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'boolDisplay'
})
export class BoolDisplayPipe implements PipeTransform {
    transform(boolValue: boolean): string {
        return(boolValue) ? "Yes" : "No";
    }
}