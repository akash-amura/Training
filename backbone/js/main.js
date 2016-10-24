// Author: Thomas Davis <thomasalwyndavis@gmail.com>
// Filename: main.js

// Require.js allows us to configure shortcut alias
// Their usage will become more apparent futher along in the tutorial.
require.config({
  paths: {
    jquery: 'libs/jquery',
    underscore: 'libs/underscore',
    backbone: 'libs/backbone',
    radio: 'libs/backbone.radio',
    marionette: 'libs/backbone.marionette',
    templates: '../templates'
  },
  shim: {
        "underscore":{
            exports: "_"
        },
        "backbone": {
            deps: ["underscore", "jquery"],
            exports: "Backbone"
        },
        "marionette":{
            deps : ['jquery', 'underscore', 'backbone','radio'],
            exports: "Marionette"
        },
        "handlebars": {
            exports: "Handlebars"
        },
        "Backbone":{
          deps: ['backbone'],
          exports:"Backbone"
        }
    },
  wrapShim: true

});

define(['jquery','underscore','backbone','marionette'],function($,_,Backbone,Mn){
  console.log(Mn);
});

require([
  // Load our app module and pass it to our definition function
  'app',

], function(App){
  // The "app" dependency is passed in as "App"
  // Again, the other dependencies passed in are not "AMD" therefore don't pass a parameter to this function
  MnApp = App.initialize();
  console.log(MnApp);
  App.start();
});
