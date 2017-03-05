import { browser, element, by } from 'protractor';

export class KpnPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('a.navbar-brand')).getText();
  }

  getPageCards() {
    return element.all(by.css('card')).count();
  }

  'a.btn.btn-success'
  waitForSync(element, waiting) {
    browser.wait(() => {
      return browser.isElementPresent(by.css(element));
    }, waiting);
  }
}
