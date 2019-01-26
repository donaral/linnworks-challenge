import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getMainHeading() {
    return element(by.css('.navbar-brand')).getText();
  }

  navigateToLogin() {
    return browser.get('/login');
  }
  
  token = element(by.id('token'));
  
  submit = element(by.css('[type="submit"]'));
  
  pageUrl() {   
    return browser.getCurrentUrl()
  }  

};
