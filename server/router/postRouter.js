const express = require('express');
const blogController = require("../controller/postController");
const router = express.Router();

router.get("/", blogController.getall);
router.get("/:id", blogController.getone);

module.exports = router;