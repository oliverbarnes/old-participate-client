import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.container.lookupFactory('model:proposal').create({
      isNew: true
    });
  }
});
