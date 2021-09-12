const express = require("express");
const morgan = require("morgan");
const gateway = require("./src/app.route");
const AppError = require("./src/modules/error/app-error");
const globalErrorHandler = require("./src/modules/error/error.controller");

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

// not found
app.use("*", (req, res, next) => {
  const err = new AppError(
    404,
    `Requested resource not found. Kindly check the URL`
  );
  next(err);
});

// app error handler
app.use(globalErrorHandler);

// starts the app
app.listen(PORT, () => console.log(`Express server running on port: ${PORT}`));
