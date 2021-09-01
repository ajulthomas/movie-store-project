const express = require("express");
const morgan = require("morgan");
const gateway = require("./src/app.route");

const PORT = 3000;

const app = express();

// morgan for logging the server calls in dev mode
app.use(morgan("dev"));

// to parse json requests
app.use(express.json());

// to parse url encoded form data
app.use(express.urlencoded({ extended: false }));

// api gateway
app.use("/api", gateway);

// starts the app
app.listen(PORT, () => console.log(`Express server running on port: ${PORT}`));
