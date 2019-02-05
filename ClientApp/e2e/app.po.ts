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
  
  getItemCount() {
    const catRows = element.all('body > app-root > div > div > div.col-sm-9.body-content > app-fetch-category > table > tbody > tr');

        var count = 0;
          for(var i = 0; i < catRows.length; ++i){
            if(catRows[i] == 2)
            count++;
        }  
      
      return count;
  }
  
  randomNumber () {
    let number = "";
    let possible = "0123456789";
  
    for (let i = 0; i < 5; i++)
      number += possible.charAt(Math.floor(Math.random() * possible.length));
  
    return number;

  }
  
  makeNewCatName () {
    const newCatName = ('New Category ' +  this.randomNumber());
    // console.log(newCatName);  
    return newCatName;
  
  }
  
};