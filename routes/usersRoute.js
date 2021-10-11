const express = require("express");
const router = express.Router();

const {
  getAllUsers,
  getUserById,
  registerUser,
  loginUser,
  updateUser,
  deleteUser,
} = require("../controllers/usersController");
const { checkToken } = require("../middlewares/authMiddleware");
const { check } = require("express-validator");

const validate = [
  check("name")
    .isLength({ min: 3, max: 30 })
    .withMessage("Name should be between 3 to 30 characters"),
  check("email").isEmail().withMessage("Email should be a valid email"),
  check("password")
    .isLength({ min: 8, max: 20 })
    .withMessage("Password should be between 8 to 20 characters"),
];

router.get("/", checkToken, getAllUsers);
router.get("/:id", checkToken, getUserById);
router.post("/", checkToken, validate, registerUser);
router.post("/login", loginUser);
router.patch("/:id", checkToken, validate, updateUser);
router.delete("/:id", checkToken, deleteUser);

module.exports = router;
