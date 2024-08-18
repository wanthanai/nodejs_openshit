const starter = require('../model/starter');

exports.testController = async function(req, res) {
    starter.testModel()   
    .then(response => {
        res.send(response);
    })
};