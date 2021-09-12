const ERROR_STATUS = require("./error.constants");

const globalErrorHandler = (err, req, res, next) => {
  console.error(err.stack);
  err.statusCode = err.statusCode || 500;
  res.status(err.statusCode).send({
    status: ERROR_STATUS[err.statusCode],
    message: err.message,
  });
};

module.exports = globalErrorHandler;
