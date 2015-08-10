import Service from '../services/suggestions';
import Model from '../models/suggestion';
import Adapter from '../adapters/suggestion';
import Serializer from '../serializers/suggestion';

export function initialize(container, application) {
  application.register('model:suggestions', Model, { instantiate: false, singleton: false });
  application.register('service:suggestions', Service);
  application.register('adapter:suggestions', Adapter);
  application.register('serializer:suggestions', Serializer);

  application.inject('service:store', 'suggestions', 'service:suggestions');
  application.inject('service:suggestions', 'serializer', 'serializer:suggestions');
}

export default {
  name: 'suggestions-service',
  after: 'store',
  initialize: initialize
};
