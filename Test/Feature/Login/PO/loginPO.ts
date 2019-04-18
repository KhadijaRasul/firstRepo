import { browser} from "protractor";
import { CommonLocators } from "../../../Lib/CommonLocators";
import { LoginLocators} from "../Locators/Loginlocators";
import * as prop from  "../../../../TestData/prop.json";

export class LoginPage {
    commonLocators=new CommonLocators();
    loginLocators=new LoginLocators();
    
    public getPage(): void {
        browser.driver.manage().window().maximize();  
        browser.get((<any>prop).Tenant1.url) 
     }
    public async getTitle() {
        browser.sleep(300);
        return await browser.getTitle();
    }
    public async getSignInTextLogin() {
        browser.sleep(100);
        return await browser.findElement(this.commonLocators.getTextSignInLogin()).getText();
    }
    public getSignInButtonPresence() {
        return browser.element(this.commonLocators.getLoginButton()).isPresent() ;
    }
    public async getForgotYourPasswordLink() {
        return await browser.element(this.commonLocators.getForgotPasswordLinkLogin()).getText();
    }
    public getUserNameField() {
        return browser.findElement(this.commonLocators.getUserNameLogin());
    }
    public getPasswordField() {
            return browser.findElement(this.commonLocators.getPasswordLogin());
    }
    public setUserName() {
        this.getUserNameField().clear();
        this.getUserNameField().sendKeys((<any>prop).Tenant1.username);   
    }
    public setPassword() {
        this.getPasswordField().clear();
        this.getPasswordField().sendKeys((<any>prop).Tenant1.password);    
    }
    public clickLoginButton() {
        browser.findElement(this.commonLocators.getLoginButton()).click();
        browser.driver.sleep(500);
    }
    public clickLogOffButton() {
        browser.findElement(this.commonLocators.getLogOFFButton()).click();
        browser.driver.sleep(500);
    }
    public async confirmLogin(){
        return await browser.findElement(this.loginLocators.getDashboardIcon()).getText();
    }
    public confirmLogOff() {
        this.getSignInButtonPresence();
    }
}

