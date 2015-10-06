import Service from '../services/delegations';
import Model from '../models/delegation';
import Adapter from '../adapters/delegation';
import Serializer from '../serializers/delegation';

export function initialize(container, application) {
  application.register('model:delegations', Model, { instantiate: false, singleton: false });
  application.register('service:delegations', Service);
  application.register('adapter:delegations', Adapter);
  application.register('serializer:delegations', Serializer);

  application.inject('service:store', 'delegations', 'service:delegations');
  application.inject('service:delegations', 'serializer', 'serializer:delegations');
}

export default {
  name: 'delegations-service',
  after: 'store',
  initialize: initialize
};
