import { body } from 'express-validator';

export const createPaymentValidator = [
  body('user_id').isInt().withMessage('User ID must be an integer'),
  body('card_id').isInt().withMessage('Card ID must be an integer'),
  body('amount').isFloat({ gt: 0 }).withMessage('Amount must be greater than 0')
];
