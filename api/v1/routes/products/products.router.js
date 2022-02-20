
const express = require('express');
const faker = require('faker');

const router = express.Router();
const products = [{ id: 3, name: 'producto 3', price: 50, image: 'https://image.com' }];

router.get('/', (req, res) => {

  const { size } = req.query;
  const limit = size || 10; // si viene lo agregará, pero sino mostrará 10 products

  for (let index = 0; index < limit; index++) {
    products.push({
      id: faker.random.number(),
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(), 10),
      image: faker.image.imageUrl(),
      description: faker.lorem.sentence()
    });
  }
  res.json(products);
});

router.get('/filter', (req, res) => {
  res.send('Soy un filter');
});

router.get('/:id', (req, res) => {

  let { id } = req.params;
  id = Number(id);

  // res.send(typeof (idx));

  products.find((p) => {
    if (p.id === id) {
      res.json(products[0]);
    }

    return res.status(404).json({
      message: "not found",
    });
  });
});

router.get('/:id/description', (req, res) => {

  let { id } = req.params;
  id = Number(id);

  // res.send(typeof (idx));

  products.find((p) => {
    if (p.id === id) {
      res.json(products[0]);
    }

    return res.send('producto no existe');
  });
});


router.get('/item', (req, res) => {
  const { q } = req.query;
  if (q) {
    return res.json({
      q
    });
  }

  return res.send('Producto no encontrado');
});


router.post('/', (req, res) => {
  const body = req.body;
  res.status(201).json({
    message: {
      dev: "Producto crea do",
      user: "Creaste el producto exitosamente"
    },
    data: body,
  })
});


router.patch('/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;

  res.json({
    message: {

      user: "producto actualizado correctamente"
    },
    data: body,
  });
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;

  res.json({
    message: 'Producto eliminado'
  });
});

module.exports = router;
