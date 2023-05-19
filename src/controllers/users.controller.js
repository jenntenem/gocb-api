const User = require("../models/user");

const userController = {};

userController.getUsers = async (req, res, next) => {
  const rols = await User.find();
  res.json({
    codigo: 200,
    error: false,
    datos: rols,
    message: "Users Found",
  });
};
userController.createUser = async (req, res, next) => {
  const data = req.body;

  const user = new User({ ...data });
  await user.save();
  res.json({
    codigo: 201,
    error: false,
    datos: user,
    message: "User created",
  });
};
userController.getUser = async (req, res, next) => {
  const { id } = req.params;
  const user = await User.findById(id);
  res.json({
    codigo: 200,
    error: false,
    datos: user,
    message: "User Found",
  });
};

userController.editUser = async (req, res, next) => {
  const { id } = req.params;
  await User.findByIdAndUpdate(id, { $set: req.body }, { new: true });
  const user = await User.findById(id);

  res.json({
    codigo: 200,
    error: false,
    datos: user,
    message: "User Updated",
  });
};

userController.deleteUser = async (req, res, next) => {
  const { id } = req.params;
  await User.findByIdAndUpdate(id, { $set: req.body }, { new: true });
  res.json({
    codigo: 200,
    error: false,
    datos: [],
    message: "User Deleted",
  });
};

userController.login = async (req, res, next) => {
  const { nombre, password } = req.body;
  let [{ id }] = await User.find(nombre, password);
  const user = await User.findById(id);
  delete user.password;

  res.json({
    codigo: 200,
    error: false,
    datos: user,
    message: user ? "User Logged" : "User Not Found",
  });
};

module.exports = userController;
