import { KpnPage } from './app.po';
import { browser, element, by } from 'protractor';

describe('kpn App', () => {
  let page: KpnPage;

  beforeEach(() => {
    page = new KpnPage();
  });

  it('should display a thank you message with the username on it when the user purshase a product', () => {
    const _username = 'Jhon';
    page.navigateTo();
    browser.waitForAngular();
    page.waitForSync('a.btn.btn-success', 5000);
    element.all(by.css('.card__cta')).get(0).click();
    browser.waitForAngular();
    element.all(by.css('a.btn.btn-success')).get(0).click();
    element(by.css('input')).sendKeys(_username);
    element.all(by.css('button.btn')).click();
    let _thankyou = element(by.css('p.con-uname')).getText();
    expect(_thankyou).toBe(`Dear ${_username}.`);
  });

  it('should display the correct product name when user purshase a product', () => {
    const _username = 'Jhon';
    page.navigateTo();
    browser.waitForAngular();
    const _productname = element(by.css('.card__title')).getText();
    element.all(by.css('.card__cta')).get(0).click();
    page.waitForSync('a.btn.btn-success', 5000);
    browser.waitForAngular();
    element.all(by.css('a.btn.btn-success')).get(0).click();
    element(by.css('input')).sendKeys(_username);
    element.all(by.css('button.btn')).click();
    let _thankyou = element(by.css('p.con-product-name')).getText();
    expect(_thankyou).toContain(_productname);
  });

  it('should display a listing page with cards on it', () => {
    page.navigateTo();
    const _cards = element.all(by.css('.card')).count();
    expect(_cards).toBeGreaterThan(0);
  });

  it('should have cards with title displayed on them', () => {
    const _productName = element.all(by.css('.card__title')).get(0).getText();
    element.all(by.css('.card__cta')).get(0).click();
    browser.waitForAngular();
    const card = element(by.css('app-product-summary h3')).getText();
    expect(card).toBe(_productName);
  });

  it('should have cards with price displayed on them', () => {
    page.navigateTo();
    page.waitForSync('a.btn.btn-success', 5000);
    const _productPrice = element.all(by.css('.card__price')).get(0).getText();
    element.all(by.css('.card__cta')).get(0).click();
    browser.waitForAngular();
    const card = element(by.css('.product-summary__price')).getText();
    expect(card).toBe(_productPrice);
  });

  it('should display message saying kpn app', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('kpn app');
  });

});
