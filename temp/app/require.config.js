// require.js looks for the following global when initializing
var require = {
    baseUrl: ".",
    paths: {
        "bootstrap": "bower_modules/components-bootstrap/js/bootstrap.min",
        "crossroads": "bower_modules/crossroads/dist/crossroads.min",
        "hasher": "bower_modules/hasher/dist/js/hasher.min",
        "jquery": "bower_modules/jquery/dist/jquery",
        "knockout": "bower_modules/knockout/dist/knockout",
        "knockout-projections": "bower_modules/knockout-projections/dist/knockout-projections",
        "signals": "bower_modules/js-signals/dist/signals.min",
        "text": "bower_modules/requirejs-text/text",
        // ForeunnerDB
        "forerunner": "bower_modules/forerunnerdb/js/dist/fdb-all.min",
        // Forerunner Db dependencies
        "async": "bower_modules/async/dist/async",
        "crypto-js":"bower_modules/crypto-js//crypto-js",
        "pako": "bower_modules/pako/dist/pako.min",
        "rest":"bower_modules/rest/client/default",

      
    },
    shim: {
        "bootstrap": { deps: ["jquery"] },
        // ForeunnerDB shim
        "forerunner": { deps: ["async", "pako","crypto-js"] }
    }
};
