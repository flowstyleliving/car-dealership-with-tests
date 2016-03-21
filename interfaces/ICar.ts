namespace app.i {
  export interface ICar {
    _id: string;
    /**
     * url holding the image of the car
     * @type {string}
     */
    image: string;
    make: string;
    model: string;
    descript: string;
    year: number;
    color: string;
    isNew: boolean;
    /**
     * standard 2 or 4
     * @type {number}
     */
    numDoors: number;
    worth: string;
  }
}
