import {by} from "protractor";


export class CommonLocators{
    
    public getTextSignInLogin():any {
        return by.xpath('//*[@id="cmmsLoginForm"]//div[contains(text(),"Sign in to your account")]');  
      //  return by.xpath('//*[@id="cmmsLoginForm"]/div/div[1]');
    }
    public getLoginButton():any {
        return by.className("loginButton");
    }
    public getLogOFFButton(){
        return by.id("logoffBtnBottom");
    }
    public getForgotPasswordLinkLogin():any {
        return by.partialLinkText('Forgot your password?');
    }
    public getUserNameLogin():any {
        return by.name('j_username');
    }
    public getPasswordLogin():any {
        return by.id('j_password');
    }
}