import { Price } from "./Price";

export interface Item {
    dtype : string,
    name : string,
    ingredients : string, 
    image : string,
    description : string,
    preparationTime : number,
    price: Price
}