const { Router } = require('express');

const CustomerService = require('../services/customer.service');
const validatorHandler = require('../middlewares/validator.handler');
const { createCustomerSchema, updateCustomerSchema, getCustomerSchema } = require('../schemas/customer.schema')

const router = Router();
const customer = new CustomerService();


router.get('/', async (req, res, next) => {
  const customers = await customer.find();
  res.json({
    "ok": true,
    data: customers
  });
});

router.get('/:id', validatorHandler(getCustomerSchema, 'params'),
  async (req, res, next) => {
    const { id } = req.params;
    const customer = await customer.findOne(id);

    res.json({
      "ok": true,
      data: customer
    });
  });

router.post('/',
  validatorHandler(createCustomerSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newCustomer = await customer.create(body);
      res.status(201).json(newCustomer);
    } catch (error) {
      next(error);
    }
  });

module.exports = router;
