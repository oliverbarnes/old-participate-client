export function initialize() {
  let application = arguments[1] || arguments[0];

  application.inject('service:store', 'participants', 'service:participants');
  application.inject('service:participants', 'serializer', 'serializer:participant');
}

export default {
  name: 'participants-service',
  after: 'store',
  initialize: initialize
};
