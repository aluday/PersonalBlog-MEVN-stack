const express = require('express');
const cors = require("cors");
const path = require('path');

const db = require('../server/config/db.js');
//const post = require("../server/router/postRouter.js")
const route = require("./router")


const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));

db.connect();
app.use(express.json());
app.use(cors());

app.use(express.urlencoded({ extended: true }))



route(app)
// app.use("/api", post)

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
});