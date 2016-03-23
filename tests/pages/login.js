import PO from '../page-object';

const { create, visitable, clickable } = PO;

export default create({
  visit: visitable('/'),
  clickLogin: clickable('.js-login-btn'),
  clickLoginWithFacebook: clickable('.js-facebook-login-btn')
});
