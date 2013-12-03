/**
 * Module dependencies.
 */

var Backbone = require('backbone');

/**
 * Expose.
 */

module.exports = Backbone.View.extend({

  shouldBeDestroyed: false,

  /**
   * Initialize base Class.
   */

  initialize: function () {
    this.on('view:destroy', this.onDestroy);
  },

  /**
   * @handler: onDestroy
   */

  onDestroy: function () {
    console.log('destroy base View');

    if (this.shouldBeDestroyed) return this.destroyAll();

    this.justHide();
  },

  /**
   * Destroy View and all sub-views
   */

  destroyAll: function () {
    var slice = Array.prototype.slice
      , el = this.el;

    console.log('destroying all: ', this.id);

    // @TODO destroy home view and all subviews
    for(var view in this.views) {
      this.views[view].trigger('view:destroy');
    }

    this.remove();

    var children = slice.call(this.el.children);

    children.forEach(function (c) {
      el.removeChild(c);
    });
  },

  /**
   * Keep in the DOM, just hide
   */

  justHide: function () {
    console.log('just hide: ', this.id);
    this.el.style.display = "none";
  }

});