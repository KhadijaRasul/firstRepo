import { browser } from "protractor";
import { CommonLocators } from "../../../Lib/CommonLocators";
import { SMLocators } from "../Locators/SMLocators";

export class SMLogTabPO {
    smLocators = new SMLocators();
    commonLocators = new CommonLocators();
    
    public clickLogTab() {
        browser.findElement(this.smLocators.getLogTab()).click();
    }
    public async getWODescFromTextBox() {
        this.clickLogTab();
        browser.sleep(3000);
        return await browser.findElement(this.smLocators.getLogWOCreatedDesc()).getText();
    }
}