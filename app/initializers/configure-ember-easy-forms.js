import Ember from 'ember';
import 'vendor/ember-easyForm/index';

export default {

  name: 'configure-ember-easy-forms',

  initialize: function( container, app ) {
      var options = {};
      Ember.EasyForm.Config.registerWrapper('default', options);
      Ember.EasyForm.Submit.reopen({
        disabled: function() {
          return this.get('formForModel.disableSubmit');
        }.property('formForModel.disableSubmit')
      });
  }
};