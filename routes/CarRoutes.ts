//import it with all //helps with ts
import * as controller from '../api/carController';
import * as express from 'express';
const router = express.Router();
// Base route => /api/v1/cars

// GET: api/v1/cars/
router.get('/', controller.getAll);

export = router;
