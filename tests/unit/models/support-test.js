/* jshint expr:true */
import { expect } from 'chai';
import {
  describe,
  describeModule,
  it,
  beforeEach,
  afterEach
} from 'ember-mocha';

describeModule('model:support', 'Unit | Model| Support',{}, function() {
    // Replace this with your real tests.
    it('exists', function() {
      var model = this.subject();
      // var store = this.store();
      expect(model).to.be.ok;
    });
  }
);
