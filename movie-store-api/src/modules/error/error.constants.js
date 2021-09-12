/**
 * Check out Mozila Docs {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#server_error_responses}
 */

const ERROR_STATUS = {
  400: "Bad Request",
  401: "Unauthorized",
  403: "Forbidden",
  404: "Not Found",
  405: "Method Not Allowed",
  429: "Too Many Requests",
  500: "Internal Server Error",
  502: "Bad Gateway",
  503: "Service Unavailable",
  504: "Gateway Timeout",
};

module.exports = ERROR_STATUS;
