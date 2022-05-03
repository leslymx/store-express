

class ProductAdapter {

  toProduct(response) {
    const adapterProduct = response.map((prod) => {
      return {
        id: prod.id,
        title: prod.title,
        completed: prod.completed,
        active: prod.active
        // created_at: prod.createdAt
      }
    });

    return adapterProduct;
  }
}

module.exports = ProductAdapter;
