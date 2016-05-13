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

  this.get('/proposals/:id', ({ proposal }, request) => {
    return proposal.find(request.params.id);
  });
  
  this.post('/supports', ({ support }, request) => {
    const attrs = JSON.parse(request.requestBody).support;

    return support.create(attrs);
  });

  this.del('/supports/:id', ({ support }, request) => {
    const supportInstance = support.find(request.params.id);
    return supportInstance.destroy();
  });
}
