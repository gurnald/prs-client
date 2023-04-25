import {Pipe, PipeTransform } from '@angular/core';
import { Request } from './request.class';

@Pipe({
    name: 'requestSearch'
})
export class RequestSearchPipe implements PipeTransform {


    transform(requests: Request[], searchCriteria: string = ""): Request[] {
        if(searchCriteria === "") {
            return requests;
          
    }
    let selectedRequests: Request[] = [];
    searchCriteria = searchCriteria.toLowerCase();
    for(let request of requests) {
        if(
            request.status.toLowerCase().includes(searchCriteria)
            || request.justification.toLowerCase().includes(searchCriteria)
            || request.total.toString().includes(searchCriteria)
            || request.rejectionreason.toLowerCase().includes(searchCriteria)
            || request.description.toLowerCase().includes(searchCriteria)
            || request.deliverymode.toLowerCase().includes(searchCriteria)
            || request.usersUserName.toLowerCase().includes(searchCriteria)

        ) {
            selectedRequests.push(request);
        }
    }
    return selectedRequests;
    }
}