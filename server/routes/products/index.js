const router = require('express').Router();

const productsList = require('./productsList');

router.get('/', function (req, res) {
  res.send(productsList);
});

module.exports = router;
