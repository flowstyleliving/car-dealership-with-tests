//import express from 'express';
//import * as express from 'express'; ****
import express = require('express');
const app = express();

//config
// ./views/index.html => index.html
app.set('views', './views');
app.engine('html', require('ejs').renderFile);
// index.html => index
app.set('view engine', 'html');


app.use('/', express.static('./ngApp'));
// replaces what's inside bower_components with /scripts
app.use('/scripts', express.static('./bower_components'));



app.get('/about', (req, res, next) => {
  let obj = {
    message: 'About Me',
    isCool: true
  }
  res.render('about.ejs', obj);
})

app.get('/contact', (req, res, next) => {
  res.render('contact.jade');
})

//be mindful of where we are putting things b/c js reads top-down + above the app.get /* call
//we are making the /v1/cars
app.use('/api/v1/cars', require('./routes/carRoutes'))


// '/*' needs to be at the bottom, b/c js reads from top-down
// routes anything that isn't there to the index
app.get('/*', (req, res, next) => {
    console.log("Hit the get route.");
    res.render('index');
})

app.use((req, res, next) => {
  let err = {status: 404, message: "Page not found."};
  next(err);
});

app.use((err: any, req: express.Request, res: express.Response, next: Function) => {
  res.status(err.status || 500).send({ message: err.message, err: err});
});

export = app.listen(3000, () => {
  console.log('Server is running on localhost:3000');
});
