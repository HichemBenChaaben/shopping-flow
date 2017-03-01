import { KpnPage } from './app.po';

describe('kpn App', () => {
  let page: KpnPage;

  beforeEach(() => {
    page = new KpnPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
