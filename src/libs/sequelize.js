const { Sequelize } = require('sequelize');

// pasarle la conexion
const config = require('./config');
// aca mandamos a traer lo del modelo de tipo de datos de la db
const setupModels = require('../db/models'); // SE CORRE DESPUES DE CREAR LA INSTANCIA

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);

// const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;
const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

const sequelize = new Sequelize(URI, {
  dialect: 'postgres', // pasarle la db que usamos, puede ser mariadb, etc
  logging: false // en consola cada vez que haga una consulta con el ORM
  // veremos el igual en comando/consulta SQL
});

setupModels(sequelize);

// con las migraciones quitamos esto de la syncronizacion
// sequelize.sync(); // para que cree la tabla usando la estructura del UserSchema
                  // esto no se recomienda en produccion, porque sino sobre-escribiriamos las tablas

module.exports = sequelize;
