import { browser } from "protractor";
import { CommonLocators } from "../../../Lib/CommonLocators";
import { SMLocators } from "../Locators/SMLocators";
import * as prop from "../../../../TestData/prop.json";

export class SMTopPanePO {
    smLocators = new SMLocators();
    commonLocators = new CommonLocators();

    public selectAssetDropDownSM() {
        browser.findElement(this.smLocators.clickAssetDropDownSM()).click();
    }
    public selectAssetSM() {
        browser.findElement(this.smLocators.getAssetSM()).click();
    }

    public selectStatusDropDownSM() {
        browser.findElement(this.smLocators.clickStatusDropDownSM()).click();
    }
    public selectStatusSM() {
        browser.findElement(this.smLocators.getStatusSM()).click();
    }
    public async getStatusFromTextBox() {
        return await browser.findElement(this.smLocators.getStatusfromTextBoxSM()).getAttribute('value');
    }

    public selectMaintenanceDropDownSM() {
        browser.findElement(this.smLocators.clickMaintenanceDropDownSM()).click();
    }
    public selectMaintenanceSM() {
        browser.findElement(this.smLocators.getMaintenanceSM()).click();
    }
    public async getMaintenanceFromTextBox() {
        return await browser.findElement(this.smLocators.getMaintenancefromTextBoxSM()).getAttribute('value');
    }

    public selectPriorityDropDownSM() {
        browser.findElement(this.smLocators.clickPriorityDropDownSM()).click();
    }
    public selectPrioritySM() {
        browser.findElement(this.smLocators.getPrioritySM()).click();
    }
    public async getPriorityFromTextBox() {
        return await browser.findElement(this.smLocators.getPriorityfromTextBoxSM()).getAttribute('value');
    }
    public selectCheckBoxForWOSM() {
        browser.findElement(this.smLocators.getCheckBoxCreateWOSM()).click();
    }
    public setEstimatedCompletionDaySM() {
        browser.findElement(this.smLocators.getEstimatedCompletionDaySM()).clear();
        browser.findElement(this.smLocators.getEstimatedCompletionDaySM()).sendKeys((<any>prop).Tenant1.noOfDayToCompletion);
    }
    public setActivationButtonSM() {
        browser.findElement(this.smLocators.activateSM()).click();
    }
    public generateWONow() {
        browser.findElement(this.smLocators.getGenerateWONowButtonSM()).click();
    }
    public async getSMCode() {
        let smCode = await browser.findElement(this.smLocators.getCode()).getAttribute("value");
        return smCode;
    }
    public clickSave(): void {
        browser.findElement(this.smLocators.clickSaveButton()).click();
    }
    public clickBack(): void {
        browser.findElement(this.smLocators.clickBackButton()).click();
    }
    
    public setUpTopPane() {
        browser.sleep(500);
        this.selectAssetDropDownSM();
        browser.sleep(500);
        this.selectAssetSM();
        browser.sleep(1000);
        this.selectStatusDropDownSM();
        browser.sleep(500);
        this.selectStatusSM();
        browser.sleep(1000);
        this.selectMaintenanceDropDownSM();
        browser.sleep(500);
        this.selectMaintenanceSM();
        browser.sleep(1000);
        this.selectPriorityDropDownSM();
        browser.sleep(500);
        this.selectPrioritySM();
        browser.sleep(1000);
        this.selectCheckBoxForWOSM();
        browser.sleep(1000);
        this.setEstimatedCompletionDaySM();
        browser.sleep(1000);
        this.setActivationButtonSM();
        browser.sleep(1000);
    }

}