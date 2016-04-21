import PO from '../page-object';

const { create, visitable, selectable, text, clickable } = PO;

export default create({
  visit: visitable('/proposal/:id'),
  selectDelegate: selectable('.delegate-select'),
  successFlashMessage: text('.alert.alert-success'),
  supportButtonText: text('.js.support-button'),
  addSupport: clickable('button')
});
