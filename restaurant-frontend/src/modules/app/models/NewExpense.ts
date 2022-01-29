export class NewExpense {
    text: string;
    value: number;

    constructor (text: string, value: number) {
        this.text = text;
        this.value = value;
    }
}