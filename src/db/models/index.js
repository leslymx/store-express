/**
 * Este archivo será donde tendremos el setup
 * de todos nuestros modelos, ejemplo comentado
 */
const { User, UserSchema } = require('./user.model');
const { Product, ProductSchema } = require('./product.model');
const { Customer, CustomerSchema } = require('./customer.model');

function setupModels(sequelize) {
  User.init(UserSchema, User.config(sequelize));
  Product.init(ProductSchema, Product.config(sequelize));
  Customer.init(CustomerSchema, Customer.config(sequelize));


  /**
   * Si los modelos tienen relaciones deben de ejecutarse
   * aca porque belongsTo es un método, pero su ejecución
   * debe de ser manual, desde acá después de la inicializacion
   */
  Customer.associate(sequelize.models);
}

module.exports = setupModels;
