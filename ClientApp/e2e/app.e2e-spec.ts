import { AppPage } from './app.po';
// import { LoginPage } from './login.po';
import { Token } from '../node_modules/@angular/compiler';

describe('App page tests', () => {
  let page: AppPage;
  
  beforeEach(() => {
    page = new AppPage();
  });

    it('should have correct heading', () => {
      page.navigateTo();
      
      expect(page.getTitle()).toEqual('LinnworksTest');
      
    });
  
  
    it('should enter token and click submit', () => {
      page.navigateToLogin();
     
      expect(page.token.isPresent()).toBeTruthy();
      
      page.token.sendKeys('bccf905c-6592-40f2-8db1-c976791fa40a');
      
      expect(page.submit.isEnabled()).toBeTruthy();
      
      page.submit.click();
    
    });
      
    it('should check we are on category page', () => {
        page.pageUrl()
          .then(function(url) {
            expect(url).toContain('/fetch-category');
          });
      }, 10000);
});


    

  


