export default function() {
  // this.post('/tokens', () => {
  //   return {
  //     access_token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9.TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ'
  //   };
  // });

  // this.get('/me', () => {
  //   return {
  //     data: {
  //       type: 'participants',
  //       id: 1
  //     }
  //   };
  // });

  this.get('/proposals/:id', (schema, request) => {
    var params = JSON.parse(request.requestBody);
    return schema.proposal.find(params.id);
  });

  // this.get('/proposals', ({ proposal }) => {
  //   return proposal.all();
  // });

  // this.get('/participants', function(db) {
  //   return {
  //     data: db.participants.map(attrs => (
  //       {type: 'participants', id: attrs.id, attributes: attrs }
  //     ))
  //   };
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
