import Car from './Car';

let db: {cars: Array<app.i.ICar>, clear: Function, init: Function } = {
  cars: [],

  clear: function() {
    this.cars.length = 0;
  },

  init: function() {
    //image, make, model, descript, year, color, isNew, numDoors, worth
    this.cars.push(new Car('https://i.ytimg.com/vi/FqDvAztUCOo/hqdefault.jpg', 'Toyota', 'Tundra', 'afadsf', 2000, 'Red', false, 4,'20K'));
    this.cars.push(new Car('http://images.classiccars.com/classifieds/409283_14978731_1970_Dodge_Challenger%2BRT.jpg', 'Dodge', 'Challenger', 'asdfsad', 1970, 'Red', false, 2, '50K'));
    this.cars.push(new Car('http://images.gtcarlot.com/pictures/107179714.jpg', 'Ford', 'F350', 'asdfadsf', 2016, 'Black', true, 2, '33K'));
    this.cars.push(new Car('http://o.aolcdn.com/hss/storage/midas/b5bdead5c37c79a23a102b786e8504c1/200618054/tesla.jpg', 'Tesla', 'Model S', 'asdfadsf', 2017, 'Black', true, 4, '100K'));
    this.cars.push(new Car('http://static.cargurus.com/images/site/2015/09/29/15/46/2016_jeep_compass-pic-1698003476807443842-1600x1200.jpeg', 'Jeep', 'Compass', 'adsfsdaf', 2016, 'Black', true, 4, '28K'));

  }
}

db.init();
export default db;
