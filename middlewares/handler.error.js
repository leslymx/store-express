function logErrors(err, req, res, next) {

  /* console.log muy util para cuando queremos
  implementar sistemas como zentry para
  empezar a monitorearlos */
  console.log(err);
  next(err);
}

// detectar un error y creara un formato
// para devolverlo al cliente
function errorHandler(err, req, res, next) {
  res.status(500).json({
    message: err.message,
    stack: err.stack // en donde podria estar el error.
  });
}

function boomErrorHandler(err, req, res, next) {
  if (err.isBoom) {
    const { output } = err;
    res.status(output.statusCode).json(output.payload);
  }
  next(err);
}

module.exports = { logErrors, errorHandler, boomErrorHandler }
