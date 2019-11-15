'use strict';


/**
 * Creation of the object transfer
 * A tranfer is a money move between two acccount
 *
 * body Transfer parameter of a transfer
 * returns Transfer
 **/
exports.createTransfer = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "sourceId" : "sourceId",
  "date" : "2000-01-23T04:56:07.000+00:00",
  "destId" : "destId",
  "montant" : 0.8008282
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Returns transfer
 * Returns the detail of the transfer
 *
 * returns Map
 **/
exports.getTransfer = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "key" : 0
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

