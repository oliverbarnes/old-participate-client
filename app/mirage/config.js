export default function() {

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
}
