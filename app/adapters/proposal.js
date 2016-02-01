import ApplicationAdapter from './application';

export default ApplicationAdapter.extend({
  /*jshint unused:vars */
  urlForQueryRecord(query, modelName) {
    return '/proposals/' + query['id'];
  }
});
