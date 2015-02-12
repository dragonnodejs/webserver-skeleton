"use strict";
/*global module:false */

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

    _.each(config.navigations, function (navigation) {
        app.get(navigation.route, function (req, res) {
            if (navigation.redirect) {
                res.redirect(navigation.redirect);
            } else {
                res.render(
                    navigation.template,
                    {
                        active: navigation.name,
                        navigations: config.navigations
                    }
                );
            }
        });
    });
};
