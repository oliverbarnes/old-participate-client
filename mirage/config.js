export default function() {
  // this.post('/tokens', () => {
  //   return {
  //     access_token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9.TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ'
  //   };
  // });

  this.get('/me', ({ participant }) => {
    return participant.first();
  });  

  this.get('/participants/:id', ({ participant }, request) => {
    return participant.find(request.params.id);
  });

  this.get('/participants', ({ participant }) => {
    return participant.all();
  });

  // this.get('/participants/:id/delegates', ({ participant }, request) => {
  //   return [];
  // });

  this.get('/proposals/:id', ({ proposal }, request) => {
    return proposal.find(request.params.id);
  });

  // this.get('/proposals', ({ proposal }) => {
  //   return proposal.all();
  // });



  // this.get('/supports', function(db, request) {
  //   let supports = [];

  //   if(Ember.isEmpty(request.queryParams)) {
  //     supports = db.supports;
  //   } else {
  //     let proposalId = request.queryParams['filter[proposal_id]'];
  //     let authorId = request.queryParams['filter[author_id]'];

  //     supports = db.supports.where({proposalId: proposalId, authorId: authorId});
  //   }

  //   return {
  //     data: supports.map(attrs => (
  //       {type: 'supports', id: attrs.id, attributes: attrs }
  //     ))
  //   };
  // });
}
