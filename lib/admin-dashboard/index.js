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
    'admin-dashboard': 'dashboard'
  },

  /**
   *
   */

  dashboard: function () {
    console.log('I\'m in dashboard page');
  }

});