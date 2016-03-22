import Car from './Car';

let db: {cars: Array<app.i.ICar>, clear: Function, init: Function } = {
  cars: [],

  clear: function() {
    this.cars.length = 0;
  },

  init: function() {
    //image, make, model, descript, year, color, isNew, numDoors, worth
    this.cars.push(new Car('0', 'Toyota', 'Tundra', 'afadsf', 2000, 'Red', false, 4,'20K'));
    this.cars.push(new Car('1', 'Dodge', 'Challenger', 'asdfsad', 1970, 'Red', false, 2, '50K'));
    this.cars.push(new Car('2', 'Ford', 'F350', 'asdfadsf', 2016, 'Black', true, 2, '33K'));
    this.cars.push(new Car('3', 'Tesla', 'Model 3', 'asdfadsf', 2017, 'Black', true, 4, '35K'));
    this.cars.push(new Car('4', 'Jeep', 'Compass', 'adsfsdaf', 2016, 'Black', true, 4, '28K'));

  }
}

db.init();
export default db;
