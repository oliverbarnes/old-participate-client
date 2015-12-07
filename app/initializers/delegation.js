export function initialize() {
  let application = arguments[1] || arguments[0];

  application.inject('service:store', 'delegations', 'service:delegations');
  application.inject('service:delegations', 'serializer', 'serializer:delegation');
}

export default {
  name: 'delegations-service',
  after: 'store',
  initialize: initialize
};
