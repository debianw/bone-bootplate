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

  tagName: 'div',

  id: 'view-admin-dashboard',

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
    console.log('on dashboard header click');
  },

  /**
   *
   */

  render: function () {
    this.el.style.display = "block";
    this.$el.html(template);

    return this;
  }

});