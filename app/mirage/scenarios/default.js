export default function(server) {

  // Seed your development database using your factories. This
  // data will not be loaded in your tests.

  server.create('me');
  server.createList('proposal', 10);
  server.create('support');
  server.create('author');
  server.createList('participant', 10);
}
