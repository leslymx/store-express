const boom = require('@hapi/boom'); // manejo de errors

const { models } = require('../libs/sequelize');
const CustomerAdapter = require('../adapters/customer.adapter');

const adapterCustomer = new CustomerAdapter();

class CustomerService {
  async create(data) {
    const customer = await models.Customer.create(data);
    return adapterCustomer.toCustomer(customer);
  }

  async find() {
    const customers = await models.Customer.findAll();
    return customers;
  }
}

module.exports = CustomerService;
