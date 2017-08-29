import { ClinicPage } from './app.po';

describe('clinic App', () => {
  let page: ClinicPage;

  beforeEach(() => {
    page = new ClinicPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
