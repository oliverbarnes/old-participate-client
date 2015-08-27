import PO from '../page-object';

export default PO.build({
  visit: PO.visitable('/proposals/:id'),
});
