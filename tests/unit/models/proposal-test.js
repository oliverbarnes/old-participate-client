/* jshint expr:true */
import { expect } from 'chai';
import {
  describe,
  it
} from 'ember-mocha';
import Resource from '../../../models/proposal';

// var subject;

// describeModule('model:proposal', 'Unit | Model| Proposal',{}, function() {
describe('proposal', function() {

  // describe('#toggleSupport', function() {
    before(function() {
      debugger;
      Resource.prototype.container = this.container;
      // Use a non-standard name, i.e. pluralized instead of singular
      this.__container__.register('model:proposalz', Resource, {});
      subject = this.__container__.lookupFactory('model:proposalz').create();
    });

    after(function() {
      delete Resource.prototype.container;
    });

    // describe('when proposal is not supported yet', function() {
      it('adds a support to it', function() {
        // expect(this.subject().get('supports')).to.eql([]);
        expect(subject.toggleSupport()).to.be.true;
      });
    // });
  // });
});
