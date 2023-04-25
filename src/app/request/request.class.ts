import { Requestline } from "../requestline/requestline.class";
import { User } from "../user/user.class";

export class Request {
    id: number = 0;
    description: string = "";
    justification: string = "";
    rejectionreason: string = "";
    deliverymode: string = "Pick Up";
    status: string = "NEW";
    total: number = 0;

    userId: number = 0;
    user!: User;
    usersUserName: string = "";

    requestLines!: Requestline[]

    
}