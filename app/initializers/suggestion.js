export function initialize() {
  let application = arguments[1] || arguments[0];

  application.inject('service:store', 'suggestions', 'service:suggestions');
  application.inject('service:suggestions', 'serializer', 'serializer:suggestion');
}

export default {
  name: 'suggestions-service',
  after: 'store',
  initialize: initialize
};
