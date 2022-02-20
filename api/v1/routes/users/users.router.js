
const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  const { limit, offset } = req.query;
  if (limit && offset) {
    return res.json({
      limit,
      offset
    });
  }

  return res.send('No se recibieron parametros.');
});


module.exports = router;

