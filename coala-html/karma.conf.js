// Karma configuration

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha', 'chai'],


    // list of files / patterns to load in the browser
    files: [
        './coalahtml/_coalahtml/bower_components/angular/angular.js',
        './coalahtml/_coalahtml/bower_components/angular-route/angular-route.js',
        './coalahtml/_coalahtml/bower_components/jquery/dist/jquery.min.js',
        './coalahtml/_coalahtml/bower_components/materialize/dist/js/materialize.min.js',
        './coalahtml/_coalahtml/bower_components/angular-sanitize/angular-sanitize.js',
        './coalahtml/_coalahtml/bower_components/google-code-prettify/src/prettify.js',
        './node_modules/angular-mocks/angular-mocks.js',
        './coalahtml/_coalahtml/app/**/*.js',
        './tests/**/*Spec.js'
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      './coalahtml/_coalahtml/app/**/*.js': ['coverage']
    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress', 'coverage'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: 1,

    // Configure code coverage reporter
    coverageReporter: {
      // common output directory
      dir: 'coverage',
      reporters: [
        // generates ./coverage/lcov.info
        {type:'lcovonly', subdir: '.'},
        // generates ./coverage/coverage-final.json
        {type:'json', subdir: '.'},
        // generated ./coverage/
        {type:'html', subdir: 'report-html'}
      ]
    },

  })
}
