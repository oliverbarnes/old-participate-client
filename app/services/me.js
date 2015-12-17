import Ember from 'ember';

const { ObjectProxy } = Ember;

export default ObjectProxy.extend({
  isServiceFactory: true,

  find: function() {
    return this.container.lookup('adapter:me').find();
  },

  hydrate: function() {
    this.find().then(function(response) {
      this.set('content', response);
    }.bind(this));
  }
});
