import PO from '../page-object';

const { create, visitable, clickable } = PO;

export default create({
  visit: visitable('/'),
  clickLoginWithFacebook: clickable('.js-facebook-login-btn')
});
