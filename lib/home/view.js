/**
 * Module dependencies.
 */

var Backbone = require('backbone')
  , template = require('./template')
  , BaseView = require('base-view')
  , Banner = require('banner');

/**
 * Expose.
 */

module.exports = BaseView.extend({

  shouldBeDestroyed: true,

  tagName: 'div',

  id: 'view-home',

  views: {},

  events: {
    'click nav #contact-us': 'onContactUs'
  },

  /**
   *
   */

  initialize: function () {
    BaseView.prototype.initialize.apply(this, arguments);

    this.views['banner'] = new Banner();
  },

  /**
   *
   */

  onContactUs: function (e) {
    console.log('on contact us');

    e.preventDefault();
  },

  /**
   *
   */

  render: function () {
    this.$el.html(template);

    // append banner
    this.el.querySelector('header').appendChild(this.views.banner.el);

    this.views.banner.render();

    // rebind events
    this.setElement(this.el);

    return this;
  }

});