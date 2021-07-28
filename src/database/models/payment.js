'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Payment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Order }) {
      // define association here
      this.hasMany(Order, { foreignKey: 'paymentId'})
    }
  };
  Payment.init({
    type: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'payments',
    modelName: 'Payment',
    timestamps: false
  });
  return Payment;
};