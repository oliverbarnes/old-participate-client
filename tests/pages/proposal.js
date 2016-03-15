import PO from '../page-object';

export default PO.create({
  visit: PO.visitable('/proposals/:id'),
  selectDelegate: PO.selectable('.delegate-select'),
  successFlashMessage: PO.text('.alert.alert-success')
});
