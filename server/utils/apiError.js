class ApiError extends Error {
  constructor(statusCode, message, code = null) {
    this.statusCode = statusCode;
    this.message = message;
    this.code = code;
  }
}
export default ApiError;
