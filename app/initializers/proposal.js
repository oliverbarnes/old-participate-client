import Service from '../services/proposals';
import Model from '../models/proposal';
import Adapter from '../adapters/proposal';
import Serializer from '../serializers/proposal';

export function initialize(container, application) {
  const adapter = 'service:proposals-adapter';
  const serializer = 'service:proposals-serializer';
  const service = 'service:proposals';
  const model = 'model:proposals';

  application.register(model, Model, { instantiate: false, singleton: false });
  application.register(service, Service);
  application.register(adapter, Adapter);
  application.register(serializer, Serializer);

  application.inject('service:store', 'proposals', service);
  application.inject(service, 'serializer', serializer);
}

export default {
  name: 'proposals-service',
  after: 'store',
  initialize: initialize
};
