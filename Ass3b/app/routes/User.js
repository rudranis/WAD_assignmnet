const express = require("express");
const userController = require("../controllers/User");

const router = express.Router();

router.post("/register", userController.register);
router.post("/login", userController.login);
router.post("/", userController.create);
router.get("/", userController.findAll);
router.get("/:id", userController.findOne);
router.patch("/:id", userController.update);
router.delete("/:id", userController.destroy);

module.exports = router;
