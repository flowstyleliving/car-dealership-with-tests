//if the typings doesn't exist, use let and nodejs will take over (y)
let uuid = require('uuid');

export default class Car implements app.i.ICar {
  public _id: string;
  /**
   * url holding the image of the car
   * @type {string}
   */
  public image: string;
  public make: string;
  public model: string;
  public descript: string;
  public year: number;
  public color: string;
  public isNew: boolean;
  /**
   * standard 2 or 4
   * @type {number}
   */
  public numDoors: number;
  public worth: string;

  constructor(obj_image: (string| app.i.ICar), make: string, model: string, descript: string, year: number, color: string, isNew: boolean, numDoors: number, worth: string) {
    this._id = uuid.v4();

    if(typeof obj_image === "object") {
      if(obj_image.image) throw new Error('The image property is required.')
      if(obj_image.make) throw new Error('The make property is required.')
      if(obj_image.model) throw new Error('The model property is required.')
      if(obj_image.descript) throw new Error('The descript property is required.')
      if(obj_image.year) throw new Error('The year property is required.')
      if(obj_image.color) throw new Error('The color property is required.')
      if(obj_image.isNew) throw new Error('The isNew property is required.')
      if(obj_image.numDoors) throw new Error('The numDoors property is required.')
      if(obj_image.worth) throw new Error('The worth property is required.')

      this.image = obj_image.image;
      this.make = obj_image.make;
      this.model = obj_image.model;
      this.descript = obj_image.descript;
      this.year = parseInt(obj_image.year.toString());
      this.color = obj_image.color;
      this.isNew = obj_image.isNew;
      this.numDoors = obj_image.numDoors;
      this.worth = obj_image.worth;

    } else {
      if(!obj_image) throw new Error('The image property is required.')
      if(!make) throw new Error('The make property is required.')
      if(!model) throw new Error('The model property is required.')
      if(!descript) throw new Error('The descript property is required.')
      if(!year) throw new Error('The year property is required.')
      if(!color) throw new Error('The color property is required.')
      if(!isNew) throw new Error('The isNew property is required.')
      if(!numDoors) throw new Error('The numDoors property is required.')
      if(!worth) throw new Error('The worth property is required.')

      this.image = obj_image;
      this.make = make;
      this.model = model;
      this.descript = descript;
      this.year = parseInt(year.toString());
      this.color = color;
      this.isNew = isNew;
      this.numDoors = numDoors;
      this.worth = worth;
    }
  }
}
