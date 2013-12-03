/**
 * Module dependencies.
 */

var View = require('./view')
  , Backbone = require('backbone');

/**
 * Expose.
 */

module.exports = Backbone.Router.extend({

  view: View,

  // routes
  routes: {
    '': 'home'
  },

  /**
   *
   */

  home: function () {
    console.log('I\'m in home page');
  }

});