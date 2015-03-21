'use strict';

// Initialize New Relic Node.js agent

if (process.env.NEW_RELIC_LICENSE_KEY) {
    require('newrelic');
}

// Load the libraries and modules

var config = {
    libraries: {
        bodyParser: require('body-parser'),
        connectFlash: require('connect-flash'),
        cookieSession: require('cookie-session'),
        underscore: require('underscore')
    },
    directory: __dirname + '/modules/',
    modules: {
        npm: [
            [require('dragonnodejs-express'), {
                app: {
                    port: process.env.PORT
                },
                auth: {
                    disabled: process.env.AUTH_DISABLED,
                    users: process.env.AUTH_USERS,
                    user: process.env.AUTH_USER,
                    password: process.env.AUTH_PASSWORD,
                    realm: process.env.AUTH_REALM
                },
                header: {
                    'X-UA-Compatible': 'IE=edge,chrome=1',
                    'X-Frame-Options': 'DENY',
                    'X-XSS-Protection': '1; mode=block',
                    'X-Powered-By': null
                },
                static: {
                    directory: __dirname + '/web/'
                }
            }],
            [require('dragonnodejs-webserver'), {
                bower: {
                    libraries: ['bootstrap', 'jquery'],
                    path: __dirname + '/'
                },
                language: {
                    default: 'en',
                    languages: ['de', 'en'],
                    path: __dirname + '/languages/'
                },
                package: {
                    path: __dirname + '/package.json'
                },
                swig: {
                    views: __dirname + '/views/'
                }
            }]
        ],
        directory: {
            app: function () {
                if (process.env.SESSION_KEYS) {
                    return { keys: JSON.parse(process.env.SESSION_KEYS) };
                }
                return { keys: ['keys'] };
            }(),
            homepage: {
                navigations: [
                    { route: '/', template: 'homepage.twig', name: 'homepage', navigation: true }
                ]
            },
            pagenotfound: {}
        }
    }
};
require('dragonnodejs')(config);
