import ApplicationAdapter from './application';
import config from 'client/config/environment';
import ServiceCache from '../mixins/service-cache';

export default ApplicationAdapter.extend(ServiceCache, {
  type: 'me',

  url: config.APP.API_HOST + 'me'
});
