/**
 * Module dependencies.
 */

var Backbone = require('backbone')
  , Viewport = require('viewport')
  , Home = require('home')

  // admin
  , AdminDashboard = require('admin-dashboard')
  , AdminSettings = require('admin-settings');

// viewport
var viewport = new Viewport();

// routes
viewport.routes['home'] = new Home();
viewport.routes['dashboard'] = new AdminDashboard();
viewport.routes['settings'] = new AdminSettings();

// append viewport
document
  .querySelector('body')
  .appendChild(viewport.el);

// start routing
Backbone.history.start();