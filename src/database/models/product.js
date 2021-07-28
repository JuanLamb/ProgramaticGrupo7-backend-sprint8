'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Color, Gender, Size, Category, Brand, Image, Detail }) {
      // define association here
      this.belongsTo(Color, { foreignKey: 'colorId', as: 'color'})
      this.belongsTo(Gender, { foreignKey: 'genderId', as: 'gender'})
      this.belongsTo(Size, { foreignKey: 'sizeId', as: 'size'})
      this.belongsTo(Category, { foreignKey: 'categoryId', as: 'category'})
      this.belongsTo(Brand, { foreignKey: 'brandId', as: 'brand'})
      this.hasMany(Image, { foreignKey: 'productId', as: "image"})
      this.hasMany(Detail, { foreignKey: 'productId'})
    }
  };
  Product.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    price: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    stockMin: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    stockMax: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    discount: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    offer: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    season: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'products',
    modelName: 'Product',
    paranoid: true,
    deletedAt: 'destroyTime'
  });
  return Product;
};