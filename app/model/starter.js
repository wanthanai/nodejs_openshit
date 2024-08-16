"user strict";

//Task object constructor
var Starter = function(user) {
  this.created_at = new Date();
};

Starter.testModel = function(status) {
    return new Promise(async resolve => {
        let response = {
            status: true
        };
        resolve(response)
    })
} 

module.exports = Starter;