'use strict';

var utils = require('../utils/writer.js');
var Transaction = require('../service/TransactionService');

module.exports.createTransaction = function createTransaction (req, res, next) {
  var body = req.swagger.params['body'].value;
  Transaction.createTransaction(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getTransaction = function getTransaction (req, res, next) {
  Transaction.getTransaction()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
