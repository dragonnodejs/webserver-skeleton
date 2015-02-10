"use strict";
/*global __dirname:false */

// Load the libraries and modules

var config = {
    directory: __dirname + '/modules/',
    modules: {
        npm: [
            [require('dragonnodejs-webserver'), {
                app: {
                    port: process.env.PORT,
                    package: __dirname + '/package.json',
                    static: __dirname + '/web/'
                },
                auth: {
                    disabled: process.env.AUTH_DISABLED || !(process.env.AUTH_USER && process.env.AUTH_PASSWORD),
                    realm: process.env.AUTH_REALM,
                    users: function () {
                        var users = {};
                        users[process.env.AUTH_USER] = process.env.AUTH_PASSWORD;
                        return users;
                    }()
                },
                bower: {
                    libraries: ['bootstrap', 'jquery'],
                    path: __dirname + '/'
                },
                header: {
                    'X-UA-Compatible': 'IE=edge,chrome=1',
                    'X-Frame-Options': 'DENY',
                    'X-XSS-Protection': '1; mode=block',
                    'X-Powered-By': null
                },
                language: {
                    default: 'en',
                    languages: ['de', 'en'],
                    path: __dirname + '/languages/'
                },
                swig: { views: __dirname + '/views/' }
            }]
        ],
        directory: {
            app: {},
            homepage: {}
        }
    }
};
require('dragonnodejs')(config);
