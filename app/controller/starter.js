const starter = require('../model/starter');

exports.testController = async function(req, res) {
    console.log(req.body);

    starter.testModel()   
    .then(response => {
        res.send(response);
    })
};