/**
 * Module dependencies.
 */

var BaseView = require('base-view')
  , template = require('./template');

/**
 * Expose.
 */

module.exports = BaseView.extend({

  id: 'home-banner',

  events: {
    'click p': 'onBanner'
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

  onBanner: function () {
    console.log('on banner clicked');
  },

  /**
   *
   */

  render: function (id) {
    this.$el.html(template);

    // rebind events
    this.setElement(this.el);
  },

  /**
   *
   */

  onDestroy: function () {
    this.destroyAll();
  }

});