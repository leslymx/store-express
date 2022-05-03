const { Model, DataTypes, Sequelize } = require('sequelize');

const PRODUCT_TABLE = 'products';

const ProductSchema = {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  title: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  completed: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
    allowNull: false
  },
  createdAt: {
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: DataTypes.NOW,
    allowNull: false,
  },
  active: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
    allowNull: false
  }
};

class Product extends Model {
  static associate() { }
  static config(sequelize) {
    return {
      sequelize,
      tableName: PRODUCT_TABLE,
      modelName: 'Product',
      timestamps: false,
    }

  }
}

module.exports = { PRODUCT_TABLE, ProductSchema, Product }
