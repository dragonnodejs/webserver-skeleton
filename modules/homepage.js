"use strict";
/*global module:false */

/**
 * Serves the homepage
 * @example
    homepage: {}
 */

module.exports = function (config, libraries, services) {
    var app = services.app;

    app.get('/', function (req, res) {
        res.render('homepage.twig');
    });
};
