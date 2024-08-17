"use strict";

module.exports = function(app)
{
    var starter = require('../controller/starter');

    // app.route("/test").get(starter.testController);
    app.route("/v2/test").post(starter.testController);
}