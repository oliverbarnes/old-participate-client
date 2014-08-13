import Ember from 'ember';
import 'vendor/ember-easyForm/index';

export default {

  name: 'fixture-adapter-has-many-bug',

  initialize: function( container, app ) {
    Ember.ApplicationSerializer = DS.RESTSerializer.extend({
      serializeHasMany: function(record, json, relationship) {
        var key = relationship.key;
        var payloadKey = this.keyForRelationship ? this.keyForRelationship(key, 'hasMany') : key;
        var relationshipType = DS.RelationshipChange.determineRelationshipType(record.constructor, relationship);

        if (['manyToNone', 'manyToMany', 'manyToOne'].contains(relationshipType)) {
          json[payloadKey] = record.get(key).mapBy('id');
        }
      }
    });
  }
};