/**
 * Module dependencies.
 */

var Backbone = require('backbone');

/**
 * Expose.
 */

module.exports = Backbone.View.extend({

  id: 'viewport',

  // cache of routes
  routes: {},

  // cache of views
  views: {},

  // current active view
  current: "",

  /**
   *
   */

  initialize: function () {
    Backbone.history.on('route', function (source, path) {
      this.render(path);
    }, this);
  },

  /**
   *
   */

  render: function (path) { console.log('route ==> ', path);
    var route = this.routes[path] || {}
      , view;

    if (!route.view || this.current === path) return;

    if (!(view = this.views[path])) {
      view = this.views[path] = new route.view;
    }

    this.$el.append(view.el);

    // hide current
    var currentView = this.views[this.current];

    if (currentView) {
      currentView.trigger('view:destroy');
      //delete this.views[this.current];
    }

    view.render();

    this.current = path;
  },

  /**
   *
   */

  isRendered: function (id) {
    return document.querySelector('#viewport #'+id);
  }

});