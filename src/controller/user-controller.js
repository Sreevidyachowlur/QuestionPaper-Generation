const express = require("express");
const router = express.Router();

const userService = require("../service/user-service");

router.post("/register", (req, res) => {
  console.log(("payload inside controller", req.body));
  userService
    .register(req.body)
    .then((result) => {
      console.log("result from service page", result);
      res.send({ data: "User has Registered successfully" });
    })
    .catch((error) => {
      console.log(error);
      res.send({ data: error });
    });
});
router.post("/login", (req, res) => {
  console.log(("payload inside controller", req.body));
  userService
    .login(req.body)
    .then((result) => {
      console.log("result from service page", result);
      res.send({ data: result });
    })
    .catch((error) => {
      console.log(error);
      res.send({ data: error });
    });
});

module.exports = router;
