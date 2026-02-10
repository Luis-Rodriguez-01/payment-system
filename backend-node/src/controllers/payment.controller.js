import Payment from '../models/Payment.js';
import User from '../models/User.js';
import Card from '../models/Card.js';
import { processPayment } from '../services/payment.service.js';

export const createPayment = async (req, res, next) => {
  try {
    const { user_id, card_id, amount } = req.body;

    const user = await User.findByPk(user_id);
    const card = await Card.findByPk(card_id);

    if (!user || !card) {
      return res.status(404).json({ message: 'User or card not found' });
    }

    const status = await processPayment(amount);

    const payment = await Payment.create({
      user_id,
      card_id,
      amount,
      status
    });

    res.status(201).json(payment);

  } catch (error) {
    next(error);
  }
};


export const getPaymentsByUser = async (req, res, next) => {
  try {
    const { userId } = req.params;

    const payments = await Payment.findAll({
      where: { user_id: userId },
      include: [
        {
          model: User,
          attributes: ['id', 'name', 'email']
        },
        {
          model: Card,
          attributes: ['id', 'card_number', 'expiry']
        }
      ]
    });

    res.json(payments);
  } catch (error) {
    next(error);
  }
};

