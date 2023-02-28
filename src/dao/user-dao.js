const userModel = require("../model/user-model");

const userDao = {
  register: (payload) => {
    console.log("payload inside dao", payload);

    return new userModel({
      name: payload.name,
      email: payload.email,
      password: payload.password,
      phone: payload.phone,
      userId: payload.userId,
    }).save();
  },
  login: (payload) => {
    return userModel.find({ email: payload.email, password: payload.password });
  },
};

module.exports = userDao;
