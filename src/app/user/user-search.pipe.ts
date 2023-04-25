import {Pipe, PipeTransform } from '@angular/core';
import { User } from './user.class';

@Pipe({
    name: 'userSearch'
})
export class UserSearchPipe implements PipeTransform {


    transform(users: User[], searchCriteria: string = ""): User[] {
        if(searchCriteria === "") {
            return users;
          
    }
    let selectedUsers: User[] = [];
    searchCriteria = searchCriteria.toLowerCase();
    for(let user of users) {
        if(
            user.firstname.toLowerCase().includes(searchCriteria)
            || user.lastname.toLocaleLowerCase().includes(searchCriteria)
            || user.username.toLowerCase().includes(searchCriteria)
            || user.phone !=null && user.phone.toLocaleLowerCase().includes(searchCriteria)
            || user.email !=null && user.email.toLocaleLowerCase().includes(searchCriteria)
        ) {
            selectedUsers.push(user);
        }
    }
    return selectedUsers;
    }
}