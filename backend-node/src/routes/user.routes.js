import { Router } from 'express';
import { createUser } from '../controllers/user.controller.js';
import { createUserValidator } from '../validators/user.validator.js';
import { validate } from '../middlewares/validate.js'; 

const router = Router();

router.post('/', createUser);
router.post('/', createUserValidator, validate, createUser);

export default router;



