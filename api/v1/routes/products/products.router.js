
const express = require('express');

const ProductsService = require('../../services/product.service')

const router = express.Router();
const service = new ProductsService(); // en el route debo de tener una instancia de la clase-servicio


router.get('/', async (req, res) => {

  const products = await service.find(); // para que devuelva los datos tenemos que usar
  res.json(products);                    // el await porque si solo usamos async en el service, lo que devolverá será una promesa.
});

router.get('/:id', async (req, res, next) => {

  try {
    const { id } = req.params;
    const product = await service.findOne(id);
    res.json(product);

  } catch (error) {
    // ejecutar el middleware de tipo error
    // aca se hace de forma explicita.
    next(error)
  }
});

router.get('/:id/description', async (req, res) => {

  const { id } = req.params;
  const { description } = await service.findOne(id);

  res.json({
    data: {
      id,
      description
    }
  });
});

router.post('/', async (req, res) => {
  const body = req.body;
  const newProduct = await service.create(body);
  res.status(201).json(newProduct);
});

router.patch('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const product = await service.update(id, body);

    res.json({
      data: product,
    });

  } catch (error) {
    next(error);
  }


});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const response = await service.delete(id);
  res.json({
    message: "se eliminó",
    response
  });
});

module.exports = router;
