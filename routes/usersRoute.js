const express = require("express");
const router = express.Router();

const usersController = require("../controllers/usersController");
const auth = require("../middlewares/authMiddleware");

router.get("/", auth.checkToken, usersController.getAllUsers);
router.get("/:id", auth.checkToken, usersController.getUserById);
router.post("/", auth.checkToken, usersController.registerUser);
router.post("/login", usersController.loginUser);
router.patch("/:id", auth.checkToken, usersController.updateUser);
router.delete("/:id", auth.checkToken, usersController.deleteUser);

module.exports = router;
