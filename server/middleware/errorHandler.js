export default function errorHandler(err, req, res, next) {
  const statusCode = err.statusCode || 500;
  return res.status(statusCode).json({
    sucess: false,
    error: {
      code: err.code || "INTERNAT_ERROR",
      message: err.message,
    },
  });
}
