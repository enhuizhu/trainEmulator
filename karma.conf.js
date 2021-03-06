// Karma configuration
// Generated on Thu Jul 07 2016 22:29:41 GMT+0100 (BST)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',

    plugins:['karma-ng-html2js-preprocessor','ng-html2js', 'karma-phantomjs-launcher', 'karma-jasmine', 'karma-chrome-launcher'],


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
      //include bower componnents  
      'bower_components/angular/angular.min.js',
      'bower_components/angular-mocks/angular-mocks.js',
      'bower_components/d3/d3.js',
      'bower_components/underscore/underscore-min.js',
      'common/*.js',
      'common/**/*.js',
      'tests/*.js',
      'tests/**/*.js',
      'tests/**/**/*.js',
      'common/views/*.html',
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'common/views/*.html': ['ng-html2js']
    },

    ngHtml2JsPreprocessor: {
        cacheIdFromPath: function(filepath) {
            // example strips 'public/' from anywhere in the path
            // module(app/templates/template.html) => app/public/templates/template.html
            // var cacheId = filepath.strip('public/', '');
            var newPath = "./" + filepath;
            console.info("new path", newPath);
            return newPath;
        },

        moduleName: 'main'
    },



    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


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
    // browsers: ['Chrome'],
    browsers: ['PhantomJS'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false
  });
};
