import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    loggedIn() {
      let attemptedTransition = this.get('session.attemptedTransition');
      if (attemptedTransition) {
        attemptedTransition.retry();
        this.get('session.attemptedTransition', null);
      } else {
        this.transitionTo('dashboard');
      }
    }
  }
});
