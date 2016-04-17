import { faker } from 'ember-cli-mirage';
import Ember from 'ember';

export function generateCode() {
  return faker.internet.password(323, false, /[a-zA-Z0-9_-]/);
}

export default Ember.Object.extend({
  open() {
    return Ember.RSVP.Promise.resolve({ authorizationCode: generateCode() });
  }
});
