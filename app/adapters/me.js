import ApplicationAdapter from './application';
import config from 'client/config/environment';

export default ApplicationAdapter.extend({
  type: 'me',

  url: config.APP.API_HOST + 'me'
});
