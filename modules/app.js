"use strict";
/*global module:false */

/**
 * Initialize the app
 * @example
    app: {}
 */

module.exports = function (config, libraries, services) {
    var app = services.app,
        language = services.language;

    app.use(language());

    app.use(function (req, res, next) {
        res.pageNotFound = function (options, fn) {
            res.status(404).render('404.twig', options, fn);
        };
        next();
    });
};
