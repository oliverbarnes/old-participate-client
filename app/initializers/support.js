import Service from '../services/supports';
import Model from '../models/support';
import Adapter from '../adapters/support';
import Serializer from '../serializers/support';

export function initialize(container, application) {
  const adapter = 'service:supports-adapter';
  const serializer = 'service:supports-serializer';
  const service = 'service:supports';
  const model = 'model:supports';

  application.register(model, Model, { instantiate: false, singleton: false });
  application.register(service, Service);
  application.register(adapter, Adapter);
  application.register(serializer, Serializer);

  application.inject('service:store', 'supports', service);
  application.inject(service, 'serializer', serializer);
}

export default {
  name: 'supports-service',
  after: 'store',
  initialize: initialize
};
