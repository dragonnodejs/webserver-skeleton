"use strict";

/**
 * Serves the pages for the application
 * @example
    homepage: {
        navigations: [
            { route: '/', template: 'homepage.twig', name: 'homepage' }
        ]
    }
 */

module.exports = function (config, libraries, services) {
    var app = services.app,
        _ = libraries.underscore;

    app.use(function (req, res, next) {
        res.locals.navigations = config.navigations;
        next();
    });

    _.each(config.navigations, function (navigation) {
        app.get(navigation.route, function (req, res) {
            if (navigation.redirect) {
                res.redirect(navigation.redirect);
            } else {
                res.render(navigation.template, { active: navigation.name });
            }
        });
    });
};
