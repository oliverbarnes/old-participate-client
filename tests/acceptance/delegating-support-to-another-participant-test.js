/* jshint expr:true */
import {
  describe,
  it,
  beforeEach,
  afterEach
} from 'mocha';
import { expect } from 'chai';
import Ember from 'ember';
import startApp from '../helpers/start-app';
import AuthorizationMixin from 'ember-jsonapi-resources/mixins/authorization';
import page from '../pages/proposal';

let App;

describe('Delegating support for a proposal to another participant', function() {
  beforeEach(function() {
    page.visit(...mirage factory id...)
  });
}
