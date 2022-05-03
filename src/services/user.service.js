const boom = require('@hapi/boom');

// const getConnection = require('../libs/postgres.js'); cambiar por sequelize
const { models } = require('../libs/sequelize');
const UserAdapter = require('../adapters/user.adapter');

const adapterUser = new UserAdapter();

class UserService {
  constructor() { }

  async create(data) {
    const newUser = await models.User.create(data);
    return adapterUser.toUser(newUser);
  }

  async find() {
    // const client = await getConnection();
    const users = await models.User.findAll({ where: { active: true } });
    const response = adapterUser.toUsers(users);
    // const rta = await client.query('SELECT * FROM tasks');
    return response;
  }

  async findOne(id) {
    const user = await models.User.findByPk(id);
    if (!user) {
      throw boom.notFound('user not found'); // mandamos el error sino encuentra el usuario y la capa de routing lanza ese error en el catch(error) { next('error')}
    }
    const response = adapterUser.toUser(user);
    return response;

    // return { id };
  }

  async update(id, changes) {
    // reusaremos la funcion del findone para no repetir el codigo de error de throw boom
    // const user = await models.User.findByPk(id);
    const user = await this.findOne(id);
    const response = await user.update(changes);
    return response;
    // return {
    //   id,
    //   changes,
    // };
  }

  async delete(id) {
    const user = await this.findOne(id);
    const response = await user.update({ active: false }, { where: { id: id } })
    // return models.User.update();
    return response;
    // return { id };
  }
}

module.exports = UserService;
