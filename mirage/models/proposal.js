import { Model, belongsTo, hasMany } from 'ember-cli-mirage';

export default Model.extend({
  author:    belongsTo('participant'),
  supports:  hasMany(),
  // suggestions:  hasMany(),
  // delegates: hasMany('participant'),
  // delegations: hasMany(),
  counterProposals: hasMany('proposal', { inverse: 'previousProposal' }),
  previousProposal: belongsTo('proposal', { inverse: 'counterProposals' })
});
