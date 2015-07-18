export function initialize(container, application) {
  application.inject('component', 'store', 'service:store');
}

export default {
  name: 'component-store',
  after: 'store',
  initialize: initialize
};
