export class RestaurantTable {
    id: number;
    tableStatus: string;
    tableShape: string;
    coordinateX: number;
    coordinateY: number;

    constructor(
        tableStatus: string,
        tableShape: string,
        coordinateX: number,
        coordinateY: number
        ) {
        this.tableStatus = tableStatus;
        this.tableShape = tableShape;
        this.coordinateX = coordinateX;
        this.coordinateY = coordinateY;
      }
}