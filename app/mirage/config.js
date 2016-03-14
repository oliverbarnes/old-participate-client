import Ember from 'ember';

export default function() {

  this.urlPrefix = 'http://localhost:3000';

  this.post('/tokens', function() {
    return {
      access_token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9.TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ'
    };
  });

  this.get('/me', function() {
    return {
      data: {
        type: 'participants',
        id: 1
      }
    };
  });

  // this.get('/proposals/:id', function(db, request) {
  //   let id = request.params.id;

  //   return {
  //     data: {
  //       type: 'proposals',
  //       id: id,
  //       attributes: db.proposals.find(id)
  //     }
  //   };
  // });

  // this.get('/proposals', function(db) {
  //   return {
  //     data: db.proposals.map(attrs => (
  //       {type: 'proposals', id: attrs.id, attributes: attrs }
  //     ))
  //   };
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
