const userDao = require("../dao/user-dao");

const userService = {
  register: (payload) => {
    return new Promise((resolve, reject) => {
      userDao
        .register(payload)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
  login: (payload) => {
    return new Promise((resolve, reject) => {
      userDao
        .login(payload)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
};

module.exports = userService;
