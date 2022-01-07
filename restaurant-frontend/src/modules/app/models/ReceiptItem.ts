import { Item } from "./Item";

export interface ReceiptItem {
    id: number,
    quantity: number,
    additionalNote: string, 
    item: Item
}