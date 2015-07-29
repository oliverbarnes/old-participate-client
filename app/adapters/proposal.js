import ApplicationAdapter from './application';
import config from '../config/environment';

export default ApplicationAdapter.extend({
  type: 'proposal',
  url: config.APP.API_HOST +  'proposals'
});
