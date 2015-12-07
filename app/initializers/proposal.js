export function initialize() {
  let application = arguments[1] || arguments[0];

  application.inject('service:store', 'proposals', 'service:proposals');
  application.inject('service:proposals', 'serializer', 'serializer:proposal');
}

export default {
  name: 'proposals-service',
  after: 'store',
  initialize: initialize
};
