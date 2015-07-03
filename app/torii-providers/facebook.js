import Ember from 'ember';
import FacebookOauth2 from 'torii/providers/facebook-oauth2';

let { resolve } = Ember.RSVP;

export default FacebookOauth2.extend({
  fetch(data) {
    return resolve(data);
  },

  close() {
    return resolve();
  }
});
