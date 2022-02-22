// será un middleware normal (req, res, next)

const boom = require('@hapi/boom');

function validatorHandler(schema, property) {
  /* configurar un middleware dinamico, es decir que no vamos a recibir
   un request ni response, sino que  vamos a recibir el
   schema y property, porque al final voy a validar de cada request
   una property en especifico, por ejemplo, body params o query
   y sacar de esa informacion para aplicar el schema*/


  /** Closure: voy a retornar una funcion que tenga el formato de un middleware */
  /** const data para obtener la información de forma dinamica,
   * si es un post viene de: req.body, si es un get viene de req.params
   * tambien puede venir en query el get, dependerá de la peticion */
  return (req, res, next) => {
    const data = req[property];
    const { error } = schema.validate(data, { abortEarly: false });
    if (error) {
      next(boom.badRequest(error));
    }
    next();
  }
};


module.exports = validatorHandler;
