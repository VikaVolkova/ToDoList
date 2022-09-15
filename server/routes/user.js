const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { userSchemaRegister } = require("../validation/user");
const { userSchemaLogin } = require("../validation/user");
const { User } = require("../models/user");

const router = express.Router();

const makeTokenPayload = (user) => ({
  user_id: user.id,
  user_role: user.role,
  email: user.email,
});

const makeAccessToken = (user) => {
  const payload = makeTokenPayload(user);
  const accessTokenLife = "1h";

  return (token = jwt.sign(payload, process.env.ACCESS_KEY, {
    expiresIn: accessTokenLife,
  }));
};

router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  const { error } = userSchemaRegister.validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    let user = await User.findOne({ email });
    if (user)
      return res.status(400).send("User with this email is already exist");

    user = new User({
      name,
      email,
      password,
    });

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);

    await user.save();

    const token = makeAccessToken(user);

    res.send(token);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const { error } = userSchemaLogin.validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    let user = await User.findOne({ email });
    if (!user)
      return res
        .status(400)
        .send("User with the provided email does not exist");

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) return res.status(400).send("Invalid password");

    const token = makeAccessToken(user);

    res.send(token);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

module.exports = router;
