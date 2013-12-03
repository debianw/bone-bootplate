/**
 * Module dependencies.
 */

var View = require('view')
  , domify = require('domify')
  , template = require('./template');

/**
 * Expose
 */

module.exports = View.extend({

  tagName: 'div',

  events: {
    'click a': 'onContact'
  },

  initialize: function () {
    this.log('Initialize view');
  },

  log: function (message) {
    console.log(arguments);
  },

  onContact: function (e) {
    this.log('on contact: ', arguments);

    e.preventDefault();
  },

  render: function () {
    this.parent.render.call(this);
    
    this.el.appendChild(domify(template));
  }

});