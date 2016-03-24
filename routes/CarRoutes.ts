//import it with all //helps with ts
import * as controller from '../api/carController';
import * as express from 'express';
import * as bodyParser from 'body-parser'

const router = express.Router();
// Base route --- /api/v1/cars

// GET: /api/v1/cars/
router.get('/', controller.getAll);

// GET: /api/v1/cars/:id
router.get('/:id', controller.getOne);

// DELETE: /api/v1/cars/:id
router.delete('/:id', controller.remove)

router.use(bodyParser.json());
// POST: /api/v1/cars/
router.post('/', controller.create);

// PUT: /api/v1/cars/:id
router.put('/:id', controller.update);

export = router;
