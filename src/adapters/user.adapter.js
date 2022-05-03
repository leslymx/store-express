class UserAdapter {

  toUser(response) {
    return {
      id: response.id,
      username: response.userName,
      email: response.email,
      role: response.role,
      active: response.active
    }
  }

  toUsers(response) {
    const adapterUser = response.map((user) => {
      return {
        id: user.id,
        username: user.userName,
        email: user.email,
        active: user.active
      }
    });

    return adapterUser;

  }
}

module.exports = UserAdapter;
