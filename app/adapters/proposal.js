import ApplicationAdapter from 'ember-jsonapi-resources/adapters/application';

export default ApplicationAdapter.extend({
  type: 'proposal',

  url: /*config.APP.API_PATH + */ '/proposals',

  /*fetchUrl: function(url) {
    const proxy = config.APP.API_HOST_PROXY;
    const host = config.APP.API_HOST;
    if (proxy && host) {
      url = url.replace(proxy, host);
    }
    return url;
  }*/
});
