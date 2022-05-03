
class CustomerAdapter {
  toCustomer(response) {
    return {
      id: response.id,
      name: response.name,
      lastname: response.lastName,
      active: response.active
    }
  }
}

module.exports = CustomerAdapter;
