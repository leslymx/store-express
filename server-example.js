
// traer la dependencia
const express = require('express');

// mandar a traer el app de express
const app = express();

// indicar en donde se ejecutará la app
const port = 3000; // port regulars 3000, 3005

// definir una ruta con su callback () => {}
// los dos parametros del callback por lo regular
// es req, res = request & response
app.get('/', (req, res) => {
  // body response al client
  res.send('Server en express');
});

app.get('/products', (req, res) => {
  res.json({
    name: 'Product 1',
    price: 1000
  })
});

app.listen(port, () => {
  console.log(port);
});
