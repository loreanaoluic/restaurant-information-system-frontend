export class NewRequest {
    itemName: string;
    ingredients: string;
    image: string;
    description: string;
    preparationTime: number;
    price: number;
    username: string;

    constructor (itemName: string, ingredients: string, image: string, description: string, preparationTime: number, 
        price: number, username: string) {
        this.itemName = itemName;
        this.ingredients = ingredients;
        this.image = image;
        this.description = description;
        this.preparationTime = preparationTime;
        this.price = price;
        this.username = username;
    }
}