import { SvCcPage } from './app.po';

describe('sv-cc App', function() {
  let page: SvCcPage;

  beforeEach(() => {
    page = new SvCcPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
