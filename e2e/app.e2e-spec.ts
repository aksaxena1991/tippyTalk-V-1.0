import { TippytalkPage } from './app.po';

describe('tippytalk App', () => {
  let page: TippytalkPage;

  beforeEach(() => {
    page = new TippytalkPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
