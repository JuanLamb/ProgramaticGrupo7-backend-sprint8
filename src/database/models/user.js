'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Avatar, Address, Role, Order}) {
      // define association here
      this.belongsTo(Avatar, { foreignKey: 'avatarId', as: 'avatar'})
      this.belongsTo(Address, { foreignKey: 'addressId', as: 'address'})
      this.belongsTo(Role, { foreignKey: 'roleId', as: 'role'})
      this.hasMany(Order, { foreignKey: 'userId'})
    }
  };
  User.init({
    firstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'users',
    modelName: 'User',
  });
  return User;
};