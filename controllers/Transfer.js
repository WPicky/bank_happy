'use strict';

var utils = require('../utils/writer.js');
var Transfer = require('../service/TransferService');

module.exports.createTransfer = function createTransfer (req, res, next) {
  var body = req.swagger.params['body'].value;
  Transfer.createTransfer(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getTransfer = function getTransfer (req, res, next) {
  Transfer.getTransfer()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
