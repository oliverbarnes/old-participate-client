import Service from '../services/delegates';
import Model from '../models/delegate';
import Adapter from '../adapters/delegate';
import Serializer from '../serializers/delegate';

export function initialize(container, application) {
  application.register('model:delegates', Model, { instantiate: false, singleton: false });
  application.register('service:delegates', Service);
  application.register('adapter:delegates', Adapter);
  application.register('serializer:delegates', Serializer);

  application.inject('service:store', 'delegates', 'service:delegates');
  application.inject('service:delegates', 'serializer', 'serializer:delegates');
}

export default {
  name: 'delegates-service',
  after: 'store',
  initialize: initialize
};
