export function initialize() {
  let application = arguments[1] || arguments[0];

  application.inject('service:store', 'supports', 'service:supports');
  application.inject('service:supports', 'serializer', 'serializer:support');
}

export default {
  name: 'supports-service',
  after: 'store',
  initialize: initialize
};
