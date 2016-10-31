import { NgWebPage } from './app.po';

describe('ng-web App', function() {
  let page: NgWebPage;

  beforeEach(() => {
    page = new NgWebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
