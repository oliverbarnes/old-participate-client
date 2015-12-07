import ApplicationAdapter from './application';
import config from 'client/config/environment';

export default ApplicationAdapter.extend({
  type: 'delegation',

  url: config.APP.API_HOST + 'delegations'
});
