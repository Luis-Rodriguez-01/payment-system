import User from '../models/User.js';

export const createUser = async (req, res, next) => {
  try {
    const { name, email } = req.body;

    const user = await User.create({ name, email });
    res.status(201).json(user);

  } catch (error) {
    next(error);
  }
};
