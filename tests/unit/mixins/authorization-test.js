/* jshint expr:true */
import { expect } from 'chai';
import {
  describe,
  it
} from 'mocha';
import Ember from 'ember';
import AuthorizationMixin from 'client/mixins/authorization';

describe('AuthorizationMixin', function() {
  // Replace this with your real tests.
  it('works', function() {
    var AuthorizationObject = Ember.Object.extend(AuthorizationMixin);
    var subject = AuthorizationObject.create();
    expect(subject).to.be.ok;
  });
});
