import ApplicationAdapter from 'ember-jsonapi-resources/adapters/application';
import AuthorizationMixin from '../mixins/authorization';
import config from '../config/environment';

export default ApplicationAdapter.extend(AuthorizationMixin, {
  type: 'proposal',
  url: config.APP.API_HOST +  'proposals'
});
