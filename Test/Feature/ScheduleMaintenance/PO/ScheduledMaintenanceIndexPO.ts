import { browser } from "protractor";
import { CommonLocators } from "../../../Lib/CommonLocators";
import { SMLocators } from "../Locators/SMLocators";

export class ScheduledMaintenanceIndexPO {
    smLocators = new SMLocators();
    commonLocators = new CommonLocators();

    public clickOnMaintenance() {
        browser.findElement(this.smLocators.getMaintenanceIcon()).click();
    }
    public scheduledMaintenanceIndexPage() {
        browser.findElement(this.smLocators.clickScheduledMaintenanceSM()).click();
    }
    public createButtonPresence() {
        return browser.element(this.smLocators.getCreateButton()).isPresent()
    }
    public clickNewButton() {
        browser.findElement(this.smLocators.clickNewButton()).click();
    }
    public async sitePickerWindowPresence() {
        return browser.element(await this.smLocators.getSitePickerWindow()).isPresent()
    }
    public getSite() {
        browser.findElement(this.smLocators.clickSiteName()).click();
    }
    public setSMCode(code: any) {
        return browser.findElement(this.smLocators.searchSMImdex()).sendKeys(code);
    }
    public clickSearchSMIndex() {
        browser.findElement(this.smLocators.getSearchIconSMIndex()).click();
    }
    public async selectSite() {
        browser.driver.sleep(1000);
        this.clickOnMaintenance();
        browser.driver.sleep(200);
        this.scheduledMaintenanceIndexPage();
        browser.driver.sleep(500);
        if (await this.createButtonPresence()) {
            browser.element(this.smLocators.getCreateButton()).click()

        }
        else {
            this.clickNewButton();
        }
        browser.driver.sleep(3000);
        if (await this.sitePickerWindowPresence()) {
            browser.driver.sleep(5000);
            this.getSite();
        }
        browser.driver.sleep(3000);
    }

    public async searchForSM(smCode: any) {
        browser.sleep(5000);
        this.setSMCode(smCode);
        browser.driver.sleep(1000);
        this.clickSearchSMIndex()
        browser.driver.sleep(1000);
        return await browser.findElement(this.smLocators.getCodeFromSMIndex()).getText();
    }
    public deleteSM() {
        browser.findElement(this.smLocators.getCheckBoxSMIndex()).click();
        browser.driver.sleep(500);
        browser.findElement(this.smLocators.getDeleteButtonSMIndex()).click();
        browser.driver.sleep(500);
        browser.findElement(this.smLocators.clickOkForDeletion()).click();
        browser.driver.sleep(10000);
    }
    public async findAndDeleteSM() {
        if(await this.noOfRecordSM()>0){
        browser.findElement(this.smLocators.getCheckBoxSMIndex()).click();
        browser.driver.sleep(500);
        browser.findElement(this.smLocators.getDeleteButtonSMIndex()).click();
        browser.driver.sleep(500);
        browser.findElement(this.smLocators.clickOkForDeletion()).click();
        browser.driver.sleep(10000);
        }
    }
    public openSM() {
        browser.findElement(this.smLocators.getExistingSM()).click()
        browser.sleep(5000);
    }
    public async noOfRecordSM(){
        let noOfRec= await browser.findElement(this.smLocators.getNoOfRecordSM()).getText();
        return Number(noOfRec.toString());
    }
}
