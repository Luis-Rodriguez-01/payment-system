import { Router } from 'express';
import { createPayment, getPaymentsByUser } from '../controllers/payment.controller.js';
import { createPaymentValidator } from '../validators/payment.validator.js';
import { validate } from '../middlewares/validate.js';


const router = Router();

router.post('/', createPayment);
router.get('/user/:userId', getPaymentsByUser);
router.post('/', createPaymentValidator, validate, createPayment);

export default router;
