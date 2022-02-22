
const express = require('express');
const cors = require('cors');
const routerApiV1 = require('./api/v1/routes');
// los middleware de tipo error se deben de hacer despues
// de declarar el routing
const { logErrors, errorHandler, boomErrorHandler } = require('./middlewares/handler.error')
const app = express();
// especificar el puerto para despliegue
// asignar de forma dinamica si viene, sino
// por defecto correria en el 3000
const port = process.env.PORT || 3000;

app.use(express.json());

/**
 * @app.use(cors()) funciona, pero dariamos
 * el acceso para cualquier DOMAIN, para
 * configurar esa parte hacemos todo el
 *
 */
const whitelist = ['http://127.0.0.1:8080', 'https://myapp.co']; // array de dominios con acceso
const options = {
  origin: (origin, callback) => {
    if (whitelist.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error('No permitido'));
    }
  }
}

app.use(cors(options));


routerApiV1(app);


// el orden en los middleware importan
// aca por ejemplo primero ejecuta
// log y despues handler
app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port);
