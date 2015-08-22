import Ember from 'ember';

export default Ember.Controller.extend({
  isLoginRoute: Ember.computed('currentPath', function() {
    return this.get('currentPath') === 'login';
  })
});
