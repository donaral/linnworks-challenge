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
 
};
