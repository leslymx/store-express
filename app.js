
const express = require('express');
const routerApiV1 = require('./api/v1/routes');
// los middleware de tipo error se deben de hacer despues
// de declarar el routing
const { logErrors, errorHandler, boomErrorHandler } = require('./middlewares/handler.error')
const app = express();
const port = 3000;

app.use(express.json());

routerApiV1(app);

// el orden en los middleware importan
// aca por ejemplo primero ejecuta
// log y despues handler
app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port);
