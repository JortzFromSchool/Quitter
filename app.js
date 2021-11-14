const express = require("express");
const app = express();
const db = require('./config/keys').mongoURI;
const port = process.env.PORT || 5000;
const mongoose = require('mongoose');
const users = require("./routes/api/users");
const logs = require("./routes/api/logs");
const bodyParser = require('body-parser');

app.get("/", (req, res) => res.send("Hello World"));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api/users", users);
app.use("/api/logs", logs);

app.listen(port, () => console.log(`Server is running on port ${port}`));
