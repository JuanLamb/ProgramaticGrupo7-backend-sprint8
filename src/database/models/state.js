'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class State extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Order }) {
      // define association here
      this.hasMany(Order, { foreignKey: 'stateId'})
    }
  };
  State.init({
    description: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'states',
    modelName: 'State',
    timestamps: false
  });
  return State;
};