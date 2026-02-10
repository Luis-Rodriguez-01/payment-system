import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';
import User from './User.js';
import Card from './Card.js';

const Payment = sequelize.define('Payment', {
  amount: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  tableName: 'pagos',
  timestamps: false
});

User.hasMany(Payment, { foreignKey: 'user_id' });
Payment.belongsTo(User, { foreignKey: 'user_id' });

Card.hasMany(Payment, { foreignKey: 'card_id' });
Payment.belongsTo(Card, { foreignKey: 'card_id' });

export default Payment;
