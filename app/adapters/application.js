export default DS.FixtureAdapter.extend({
  fixturesForType: function(type) {
    var result = this._super(type);
    if(result) {
      result = Ember.EnumerableUtils.map(result, function(fixture) {
        return jQuery.extend(true, {}, fixture);
      });
    }
    return result;
  }
});