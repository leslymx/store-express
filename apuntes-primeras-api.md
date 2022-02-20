// app.get('/products', (req, res) => {
//   const products = [];
//   const { size } = req.query;
//   const limit = size || 10; // si viene lo agregará, pero sino mostrará 10 products
//   for (let index = 0; index < limit; index++) {
//     products.push({
//       name: faker.commerce.productName(),
//       price: parseInt(faker.commerce.price(), 10),
//       image: faker.image.imageUrl(),
//     });
//   }
//   res.json(products);
// });

// app.get('/products/filter', (req, res) => {
//   res.send('Soy un filter');
// });

// app.get('/products/:id', (req, res) => {
//   const { id } = req.params;
//   res.json({
//     id,
//     name: "Libreta",
//     price: 8000
//   });
// });
// CASO DE USO CON EL ROUTING 'REPETIDO''
// Esto arroja en el navegador un objeto,
// está pasando el filter como un id, por lo que
// es como si estuviera usando el endpoint de:
// /products/:id, pero esto no es así porque
// este endpoint esperamos que vaya a otra ruta.
//SOLUCIÓN: Todo lo que sea especifico debe de ir antes
// de todo lo que sea dinámico. Esto hay que moverlo arriba
// del products/:id
// app.get('/products/filter', (req, res) => {
//   res.send('Soy un filter');
// });

// QUERY PARAMS
// como son optionals no se colocan directamente
// en el endpoint que hagamos
// app.get('/users', (req, res) => {
//   // los params que vengan de query
//   // se recojen de query
//   const { limit, offset } = req.query;
//   if (limit && offset) {
//     return res.json({
//       limit,
//       offset
//     });
//   }

//   return res.send('No se recibieron parametros.');
// });

// recibiendo dos parametros en la url
// app.get('/categories/:categoryId/products/:productId', (req, res) => {
//   const { categoryId, productId } = req.params;
//   res.json({
//     categoryId,
//     productId,
//   });
// });
