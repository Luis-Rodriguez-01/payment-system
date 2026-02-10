import { body } from 'express-validator';

export const createCardValidator = [
  body('user_id').isInt().withMessage('User ID must be an integer'),
  body('card_number').notEmpty().withMessage('Card number is required'),
  body('expiry').notEmpty().withMessage('Expiry date is required'),
  body('cvv').notEmpty().withMessage('CVV is required')
];
