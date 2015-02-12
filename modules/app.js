"use strict";
/*global module:false */

/**
 * Initialize the app
 * @example
    app: { keys: ['key'] }
 */

module.exports = function (config, libraries, services) {
    var app = services.app,
        bodyParser = libraries.bodyParser,
        connectFlash = libraries.connectFlash,
        cookieSession = libraries.cookieSession,
        language = services.language;

    app.use(language());

    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(cookieSession({ keys: config.keys}));
    app.use(connectFlash());

    app.use(function (req, res, next) {
        res.locals.req = req;
        next();
    });

    app.use(function (req, res, next) {
        res.pageNotFound = function (options, fn) {
            res.status(404).render('404.twig', options, fn);
        };
        next();
    });
};
