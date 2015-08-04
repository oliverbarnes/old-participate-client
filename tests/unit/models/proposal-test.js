/* jshint expr:true */
import { expect } from 'chai';
import { describeModule, it } from 'ember-mocha';
import Resource from '../../../models/proposal';

describeModule('model:proposal', 'ProposalResource', function() {

  it('adds a support to it', function() {
    Resource.prototype.container = this.container;
    this.container.register('model:proposals', Resource, {});

    //var subject = Resource.create();
    var subject = this.container.lookupFactory('model:proposals').create();
    //expect(this.subject().get('supports')).to.eql([]);
    expect(subject.toggleSupport()).to.be.true;

    delete Resource.prototype.container;
  });
});
