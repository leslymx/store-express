const faker = require('faker');
const boom = require('@hapi/boom');

class ProductsService {
  // logica del negocio, crear, editar, etc

  constructor() {
    this.products = [{ id: "5", description: "esta es una description", image: "imagen x" },];
    this.generate();
  }

  generate() {
    const limit = 100;

    for (let index = 0; index < limit; index++) {
      this.products.push({
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price(), 10),
        image: faker.image.imageUrl(),
        description: faker.lorem.sentence(),
        isBlock: faker.datatype.boolean(),
      });
    }
  }

  async create(data) {
    const { name, price, image, description } = data;

    const newProduct = {
      id: faker.datatype.uuid(),
      name,
      price,
      image,
      description
    }
    this.products.push(newProduct);
    return newProduct;
  }

  find() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.products);
      }, 5000);
    });
  }

  async findOne(id) {

    const product = this.products.find(item => item.id === id);

    if (!product) {
      throw boom.notFound('product not found');
    }

    // logica de negocio para permitir ver ciertos productos y otros no
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
    }
    return this.products[index];
  }

  async delete(id) {
    const index = this.products.findIndex(item => item.id === id);
    if (index === -1) {
      throw boom.notFound('product not found');
    }

    this.products.splice(index, 1);
    return { id }
  }
}


module.exports = ProductsService;
