import ApplicationAdapter from 'ember-jsonapi-resources/adapters/application';
import AuthorizationMixin from '../mixins/authorization';

export default ApplicationAdapter.extend(AuthorizationMixin);
