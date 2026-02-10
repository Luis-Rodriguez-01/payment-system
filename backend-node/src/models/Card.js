import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';
import User from './User.js';

const Card = sequelize.define('Card', {
  card_number: {
  type: DataTypes.STRING(16),
  allowNull: false
},
  expiry: {
    type: DataTypes.STRING,
    allowNull: false
  },
  cvv: {
  type: DataTypes.STRING(4),
  allowNull: false
}
}, {
  tableName: 'tarjetas',
  timestamps: false
});

User.hasMany(Card, { foreignKey: 'user_id' });
Card.belongsTo(User, { foreignKey: 'user_id' });

export default Card;
