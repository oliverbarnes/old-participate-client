import Service from '../services/me';
import Model from '../models/me';
import Adapter from '../adapters/me';
import Serializer from '../serializers/me';

export function initialize(container, application) {
  const adapter = 'service:me-adapter';
  const serializer = 'service:me-serializer';
  const service = 'service:me';
  const model = 'model:me';

  application.register(model, Model, { instantiate: false, singleton: false });
  application.register(service, Service);
  application.register(adapter, Adapter);
  application.register(serializer, Serializer);

  application.inject('service:store', 'me', service);
  application.inject(service, 'serializer', serializer);
}

export default {
  name: 'me-service',
  after: 'store',
  initialize: initialize
};
