/**
 * Module dependencies.
 */

var Backbone = require('backbone')
  , template = require('./template')
  , BaseView = require('base-view');

/**
 * Expose.
 */

module.exports = BaseView.extend({

  shouldBeDestroyed: true,

  tagName: 'div',

  id: 'view-admin-settings',

  events: {
    'click header': 'onHeader'
  },

  /**
   *
   */

  initialize: function () {
    BaseView.prototype.initialize.apply(this, arguments);
  },

  /**
   *
   */

  onHeader: function () {
    console.log('on settings header click');
  },

  /**
   *
   */

  render: function () {
    this.$el.html(template);

    // rebind events
    this.setElement(this.el);
  }

});