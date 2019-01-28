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
    
    it('should go to add new category page', () => {
      
      expect(page.createNewButton.isDisplayed()).toBeTruthy();
      
      page.createNewButton.click();
      
      page.pageUrl()
          .then(function(url) {
            expect(url).toContain('/add-category');
          });
      }, 10000);
      
    it('should add new category', () => {
      page.catNameField.sendKeys('Brand New Category');
      
      page.saveCatButton.click();
      
      page.pageUrl()
        .then(function(url) {
          expect(url).toContain('/fetch-category');
        });
    }, 10000);
      
    // check that new category is added to list 
      
});

// move url check to seperate fx
// generate random number for new category name



