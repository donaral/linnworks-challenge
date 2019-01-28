import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getTitle() {
    return browser.getTitle();
  }
  
  navigateToLogin() {
    return browser.get('/login');
  }
  
  token = element(by.id('token'));
  
  submit = element(by.css('[type="submit"]'));
  
  pageUrl() {   
    return browser.getCurrentUrl()
  }  
  
  getMainHeading() {
    return element(by.css('h1')).getText();
  }
  
  createNewButton = element(by.css('a[href="/add-category"]'));
  
  catNameField = element(by.css('[formcontrolname="categoryName"]'));
  
  saveCatButton = element(by.css('[type="submit"]'));
  
  catTable = element.all(by.css('body > app-root > div > div > div.col-sm-9.body-content > app-fetch-category > table > tbody'));
 
};
