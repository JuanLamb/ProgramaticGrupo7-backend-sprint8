'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Detail extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Order, Product }) {
      // define association here
      this.belongsTo(Order, { foreignKey: 'orderId', as: 'order'})
      this.belongsTo(Product, { foreignKey: 'productId', as: 'product'})
    }
  };
  Detail.init({
    quantity: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    subtotal: {
      type: DataTypes.DECIMAL,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'details',
    modelName: 'Detail',
  });
  return Detail;
};