import Ember from 'ember';

export default Ember.Route.extend({
  model: (params) => {
    return this.store.find('proposals', {
      id: params.id,
      query: {
        include: 'author,supports'
      }
    });
  }
});
