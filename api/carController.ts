import * as express from 'express';
import Car from '../models/Car';
import db from '../models/db';

export function getAll(req: express.Request, res: express.Response, next: express.NextFunction) {
  res.json(db.cars);
}

export function getOne(req: express.Request, res: express.Response, next: Function) {

}

export function create(req: express.Request, res: express.Response, next: Function) {
  try {
    let car = new Car(<app.i.ICar>req.body);
    db.cars.push(car);
    res.json(car);
  } catch(ex) {
    next(ex)
  }
}

export function update(req: express.Request, res: express.Response, next: Function) {

}

export function remove(req: express.Request, res: express.Response, next: Function) {

}
