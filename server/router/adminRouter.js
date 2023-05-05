const express = require('express');
const authController = require('../controller/authController');
const blogController = require('../controller/postController');

const router = express.Router();


//dang nhap

router.get("/stored", authController.getallofauth);

router.post("/post/create", blogController.create);

router.put("/post/:id", blogController.update);

router.get("/post/:id", blogController.getone);

router.delete("/post/:id", blogController.delete);

module.exports = router;