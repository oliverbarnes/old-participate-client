import ApplicationAdapter from './application'

export default ApplicationAdapter.extend({
  urlForQueryRecord(query, modelName) {
    return '/me';
  }
});
