const { genSaltSync, hashSync, compareSync } = require("bcrypt");
const { sign } = require("jsonwebtoken");

const usersQuery = require("../dbqueries/usersQuery");

exports.getAllUsers = async (req, res) => {
  try {
    let users = await usersQuery.getAllUsers();
    res.json({
      success: true,
      data: users,
    });
  } catch (error) {
    return;
  }
};

exports.getUserById = async (req, res) => {
  const id = req.params.id;
  try {
    let user = await usersQuery.getUserById(id);

    if (!user) {
      return res.json({
        success: false,
        message: "Record not found!",
      });
    }

    res.json({
      success: true,
      data: user,
    });
  } catch (error) {
    return;
  }
};

exports.registerUser = async (req, res) => {
  const { name, email, avatar, password } = req.body;
  try {
    const salt = genSaltSync(10);
    const hashedPassword = hashSync(password, salt);
    let user = await usersQuery.registerUser(
      name,
      email,
      avatar,
      hashedPassword
    );

    return res.status(200).json({
      success: true,
      data: user,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Database connection error!",
    });
  }
};
