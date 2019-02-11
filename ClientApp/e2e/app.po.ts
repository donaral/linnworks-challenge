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
  
  //categoryRows = element.all('body > app-root > div > div > div.col-sm-9.body-content > app-fetch-category > table > tbody > tr');
  
  
  randomNumber () {
    let number = "";
    let possible = "0123456789";
  
    for (let i = 0; i < 5; i++)
      number += possible.charAt(Math.floor(Math.random() * possible.length));
  
    return number;

  }
  
  newCatName = ('New Category ' +  this.randomNumber());
  
  lastCategory = element.all(by.css('tr')).last();
  

  
};