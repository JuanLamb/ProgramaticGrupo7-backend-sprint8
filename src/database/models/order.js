'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User, Shipping, State, Payment, Detail }) {
      // define association here
      this.belongsTo(User, { foreignKey: 'userId', as: 'user'})
      this.belongsTo(Shipping, { foreignKey: 'shippingId', as: 'shipping'})
      this.belongsTo(State, { foreignKey: 'stateId', as: 'state'})
      this.belongsTo(Payment, { foreignKey: 'paymentId', as: 'payment'})
      this.hasMany(Detail, { foreignKey: 'orderId'})
    }
  };
  Order.init({
    number: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    total: {
      type: DataTypes.DECIMAL,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'orders',
    modelName: 'Order',
  });
  return Order;
};