
const express = require('express');
// mandar a llamar a todo el routing de products o de todos
// los que vayamos a usar
const productsRouter = require('./products/products.router');
const usersRouter = require('./users/users.router.js');
const categoriesRouter = require('./categories/categories.router');


// function que va a recibir la app
function routerApi(app) {
  const router = express.Router();
  // entonces ya puedo cambiar el app por router
  app.use('/api/v1', router); // path global para el endpoint

  // aca es en donde se define el endpoint
  router.use('/products', productsRouter);
  router.use('/users', usersRouter);
  router.use('/categories', categoriesRouter);
}

module.exports = routerApi;
