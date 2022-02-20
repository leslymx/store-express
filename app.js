
const express = require('express');
const routerApiV1 = require('./api/v1/routes');
const app = express();
const port = 3000;

app.use(express.json());

routerApiV1(app);

app.listen(port);
