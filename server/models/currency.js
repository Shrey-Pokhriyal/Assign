'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class currency extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  currency.init({
    currency_id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    value: {
      type: DataTypes.STRING
    },
    label: {
      type: DataTypes.STRING
    },
    symbol: {
      type: DataTypes.STRING
    }
  }, {
    sequelize,
    tableName: 'currency',
    modelName: 'currency',
  });
  return currency;
};