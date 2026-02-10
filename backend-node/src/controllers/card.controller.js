import Card from '../models/Card.js';
import User from '../models/User.js';

export const createCard = async (req, res, next) => {
  try {
    const { user_id, card_number, expiry, cvv } = req.body;

    const user = await User.findByPk(user_id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const card = await Card.create({ user_id, card_number, expiry, cvv });
    res.status(201).json(card);

  } catch (error) {
    next(error);
  }
};
