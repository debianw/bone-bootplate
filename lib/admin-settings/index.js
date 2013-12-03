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
    'admin-settings': 'settings'
  },

  /**
   *
   */

  settings: function () {
    console.log('I\'m in settings page');
  }

});