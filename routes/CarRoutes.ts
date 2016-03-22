//import it with all //helps with ts
import * as controller from '../api/carController';
import * as express from 'express';
import * as bodyParser from 'body-parser'

const router = express.Router();
// Base route => /api/v1/cars

// GET: api/v1/cars/
router.get('/', controller.getAll);

router.use(bodyParser.json());
// POST: /api/v1/cars/
router.post('/', controller.create)

export = router;
