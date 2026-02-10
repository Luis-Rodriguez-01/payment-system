import { Router } from 'express';
import { createCard } from '../controllers/card.controller.js';
import { createCardValidator } from '../validators/card.validator.js';
import { validate } from '../middlewares/validate.js';


const router = Router();

router.post('/', createCard);
router.post('/', createCardValidator, validate, createCard);

export default router;
