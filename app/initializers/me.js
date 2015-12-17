export function initialize() {
  let application = arguments[1] || arguments[0];

  application.inject('service:store', 'me', 'service:me');
  application.inject('adapter:me', 'serializer', 'serializer:me');
}

export default {
  name: 'me-service',
  after: 'store',
  initialize: initialize
};
