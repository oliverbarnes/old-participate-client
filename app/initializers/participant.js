import Service from '../services/participants';
import Model from '../models/participant';
import Adapter from '../adapters/participant';
import Serializer from '../serializers/participant';

export function initialize(container, application) {
  application.register('model:participants', Model, { instantiate: false, singleton: false });
  application.register('service:participants', Service);
  application.register('adapter:participants', Adapter);
  application.register('serializer:participants', Serializer);

  application.inject('service:store', 'participants', 'service:participants');
  application.inject('service:participants', 'serializer', 'serializer:participants');
}

export default {
  name: 'participants-service',
  after: 'store',
  initialize: initialize
};
