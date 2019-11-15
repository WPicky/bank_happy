'use strict';


/**
 * Creation of the object transaction
 * A transaction is a deposit or withdrawal of money
 *
 * body Transaction parameters of the object transaction
 * returns Transaction
 **/
exports.createTransaction = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "date" : "2000-01-23T04:56:07.000+00:00",
  "montant" : 0.8008282,
  "userId" : "userId"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Returns transaction by the id of the account/user
 * Returns the detail of the transaction
 *
 * returns Map
 **/
exports.getTransaction = function() {
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

