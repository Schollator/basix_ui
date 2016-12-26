import { NgbPage } from './app.po';

describe('ngb App', function() {
  let page: NgbPage;

  beforeEach(() => {
    page = new NgbPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
