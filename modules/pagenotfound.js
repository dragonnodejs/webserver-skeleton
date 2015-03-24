'use strict';

/**
 * Page not found function and handler for all routes which are not handled
 * @example
    pagenotfound: {}
 */

module.exports = function (config, libraries, services) {
    var app = services.app;

    app.use(function (req, res, next) {
        res.pageNotFound = function () {
            res.status(404).render('404.html.twig', { active: 'pagenotfound' });
        };
        next();
    });

    app.get('*', function (req, res) {
        res.pageNotFound();
    });
};
