import { browser, by, element } from 'protractor';
import 'tslib';

describe('Header', () => {

  beforeEach(async () => {
    /**
     * Change hash depending on router LocationStrategy.
     */
    await browser.get('/#/header');
  });

  it('should have a title', async () => {
    let subject = await browser.getTitle();
    let result  = 'Angular2 Webpack Starter by @gdi2290 from @AngularClass';
    expect(subject).toEqual(result);
  });

});
