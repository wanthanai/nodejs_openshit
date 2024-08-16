"use strict";

module.exports = function(app)
{
    var starter = require('../controller/starter');

    // app.route("/test").get(starter.testController);
    app.route("/test").post(starter.testController);
}