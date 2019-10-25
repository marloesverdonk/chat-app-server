const {Router} = require('express')
const User = require("./model");
const bcrypt = require("bcrypt");

const router = new Router()


router.post("/users", (req, res, next) => {
  const email = req.body.email
  const password = req.body.password

  if (!email || !password) {
    res.status(400).send({
      message: 'Please supply a valid email and password'
    })
  } else {
    User.create({
    email: email,
    password: bcrypt.hashSync(password, 10) // 10 salt is the salt
  })
    .then(() => res.status(201).send({ message: "User created succesfully" }))
    .catch(next);
}
})

module.exports = router
