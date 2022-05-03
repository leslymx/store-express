const { Model, DataTypes, Sequelize } = require('sequelize');

const USER_TABLE = 'users';

// cual sera el schema de tipo de datos de la db
const UserSchema = {
  id: {
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  userName: {
    type: DataTypes.TEXT,
    allowNull: false,
    field: 'username'
  },
  email: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true
  },
  password: {
    allowNull: false,
    type: DataTypes.STRING
  },
  role: {
    allowNull: false,
    type: DataTypes.STRING,
    defaultValue: 'customer'
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
}

class User extends Model {
  static associate() {
    // definimos aca todas las relaciones
    // models
  }
  /**
   * @param sequelize es la conexion que recibira
   * la convencion es nombrarla sequelize
   */
  static config(sequelize) {
    return {
      sequelize,
      tableName: USER_TABLE,
      modelName: 'User',
      timestamps: false
    }
  }
}


module.exports = { USER_TABLE, UserSchema, User }
