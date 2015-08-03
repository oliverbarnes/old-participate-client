/* jshint expr:true */
import {
  describe,
  describeModel,
  it
} from 'ember-mocha';
import { expect } from 'chai';

var supports;

describeModel('proposal', 'Proposal',{
  // needs: [
  //   'model:proposals'
  // ]
}, function() {
  // beforeEach(function() {
  // });

  describe('#toggleSupport', function() {
    describe('when proposal is not supported yet', function() {
      it('adds a support to it', function() {
        expect(this.subject().get('supports')).to.eql([]);
        this.subject().toggleSupport;
        expect(this.subject().get('supports')).to.eql(supports);
      });
    });
  });
});
