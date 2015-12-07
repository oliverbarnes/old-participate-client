export function initialize() {
  let application = arguments[1] || arguments[0];

  application.inject('service:store', 'delegates', 'service:delegates');
  application.inject('service:delegates', 'serializer', 'serializer:delegate');
}

export default {
  name: 'delegates-service',
  after: 'store',
  initialize: initialize
};
