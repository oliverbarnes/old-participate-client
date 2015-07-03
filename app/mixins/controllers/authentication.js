import Ember from 'ember';

export default Ember.Mixin.create({
  _attemptAuthentication(strategy) {
    strategy.call().then(() => {
      this.send('loggedIn');
    }, (error) => {
      this.set('error', error.error);
    });
  }
});
