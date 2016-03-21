import * as express from 'express';
import Car from '../models/Car'
let cars: Array<app.i.ICar> = [];
seedCars(cars);

export function getAll(req: express.Request, res: express.Response, next: express.NextFunction) {
  res.json(cars);
}

export function seedCars(cars:Array<app.i.ICar>) {
  //image, make, model, descript, year, color, isNew, numDoors, worth
  cars.push(new Car('0', 'Toyota', 'Tundra', 'afadsf', 2000, 'Red', false, 4,'20K'));
  cars.push(new Car('1', 'Dodge', 'Challenger', 'asdfsad', 1970, 'Red', false, 2, '50K'));
  cars.push(new Car('2', 'Ford', 'F350', 'asdfadsf', 2016, 'Black', true, 2, '33K'));
  cars.push(new Car('3', 'Tesla', 'Model 3', 'asdfadsf', 2017, 'Black', true, 4, '35K'));
  cars.push(new Car('4', 'Jeep', 'Compass', 'adsfsdaf', 2016, 'Black', true, 4, '28K'));

}
