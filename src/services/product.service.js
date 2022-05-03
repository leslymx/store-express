const faker = require('faker');
const boom = require('@hapi/boom');

// const pool = require('../libs/postgres.pool'); cambiamos por sequelize
const { models } = require('../libs/sequelize');
const ProductAdapter = require('../adapters/product.adapter');

const adapterProduct = new ProductAdapter();

class ProductsService {

  constructor() {
    this.products = [];
    this.generate();
    // this.pool = pool;
    // this.pool.on('error', (err) => {
    //   console.error('Error inesperado desde el cliente', err);
    //   process.exit(-1);
    // });
  }

  generate() {
    const limit = 100;
    for (let index = 0; index < limit; index++) {
      this.products.push({
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price(), 10),
        image: faker.image.imageUrl(),
        isBlock: faker.datatype.boolean(),
      });
    }
  }

  async create(data) {
    const newProduct = {
      id: faker.datatype.uuid(),
      ...data
    }
    this.products.push(newProduct);
    return newProduct;
  }

  async find() {
    try {
      // cambiar por ORM
      /* const query = 'SELECT * FROM tasks';
      const response = await this.pool.query(query);
      return response.rows; */

      // const query = 'SELECT * FROM tasks';
      // const [data, metadata] = await sequelize.query(query);
      // return { data, metadata };
      const response = await models.Product.findAll({ where: { active: true } });
      const products = adapterProduct.toProduct(response);

      return products;
    } catch (err) {
      console.log(err.stack);
    }
    // return this.products; esto era un mock de datos locales, cambiamos a db
  }

  async findOne(id) {
    const product = this.products.find(item => item.id === id);
    if (!product) {
      throw boom.notFound('product not found');
    }
    if (product.isBlock) {
      throw boom.conflict('product is block');
    }
    return product;
  }

  async update(id, changes) {
    const index = this.products.findIndex(item => item.id === id);
    if (index === -1) {
      throw boom.notFound('product not found');
    }
    const product = this.products[index];
    this.products[index] = {
      ...product,
      ...changes
    };
    return this.products[index];
  }

  async delete(id) {
    const index = this.products.findIndex(item => item.id === id);
    if (index === -1) {
      throw boom.notFound('product not found');
    }
    this.products.splice(index, 1);
    return { id };
  }

}

module.exports = ProductsService;
