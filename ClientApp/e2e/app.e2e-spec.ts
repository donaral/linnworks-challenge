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
      
      expect(page.getMainHeading()).toEqual('Linnworks Test');
      
    });
  
  
    it('should login succesfully with token', () => {
      page.navigateToLogin();
     
      expect(page.token.isPresent()).toBeTruthy();
      
      page.token.sendKeys('bccf905c-6592-40f2-8db1-c976791fa40a');
      
      page.submit.click();
            
      page.pause(2000);
      
      expect(page.pageUrl).toContain('/fetch-category');  
      
    });

    it('should give warning with incorrect token', () => {

    });
    

  
});

