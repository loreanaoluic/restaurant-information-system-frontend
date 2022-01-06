import { User } from "./User";

export interface Request {
    id : number,
    itemName : string,
    ingredients : string, 
    image : string,
    description : string,
    preparationTime : number,
    price : number,
    user: User
}