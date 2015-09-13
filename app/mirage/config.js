export default function() {

  this.get('/me', function(db, request) {
    let me = db.mes[0];

    return {
      data: {
        type: 'me',
        id: me.id,
        attributes: me
      }
    };
  });

  this.get('/proposals/:id', function(db, request) {
    let id = request.params.id;

    return {
      data: {
        type: 'proposals',
        id: id,
        attributes: db.proposals.find(id)
      }
    };
  });

  this.get('/participants', function(db, request) {
    return {
      data: db.participants.map(attrs => (
        {type: 'participants', id: attrs.id, attributes: attrs }
      ))
    };
  });

  this.get('/supports', function(db, request) {
    let supports = []

    if(Ember.isEmpty(request.queryParams)) {
      supports = db.supports;
    } else {
      let proposalId = request.queryParams['filter[proposal_id]'];
      let authorId = request.queryParams['filter[author_id]'];

      supports = db.supports.where({proposalId: proposalId, authorId: authorId});
    }

    return {
      data: supports.map(attrs => (
        {type: 'supports', id: attrs.id, attributes: attrs }
      ))
    };
  });
}
