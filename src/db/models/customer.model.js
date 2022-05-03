const { Model, DataTypes, Sequelize } = require('sequelize');
const { USER_TABLE } = require('./user.model')

const CUSTOMER_TABLE = 'customers';

const CustomerSchema = {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'last_name'
  },
  phone: {
    allowNull: true,
    type: DataTypes.STRING,
  },
  /**
   * Creamos el schema para el campo de la FK
   */
  userId: {
    field: 'user_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: USER_TABLE,
      key: 'id',
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: Sequelize.NOW
  },
  active: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
    allowNull: false
  }
};



class Customer extends Model {
  static associate(models) {
    /**
     * con belongsTo la FK debe de estar en la tabla de
     * Customer
     * */
    this.belongsTo(models.User, { as: 'user' });

  };
  static config(sequelize) {
    return {
      sequelize,
      tableName: CUSTOMER_TABLE,
      modelName: 'Customer',
      timestamps: false
    }
  }
};


module.exports = { CUSTOMER_TABLE, CustomerSchema, Customer };
