import { browser } from "protractor";
import { CommonLocators } from "../../../Lib/CommonLocators";
import { SMLocators } from "../Locators/SMLocators";
import * as prop from "../../../../TestData/prop.json";

export class SMGeneralTabPO {
    smLocators = new SMLocators();
    commonLocators = new CommonLocators();

    public setSummarySM() {
        browser.findElement(this.smLocators.getSummarySM()).clear();
        browser.findElement(this.smLocators.getSummarySM()).sendKeys((<any>prop).Tenant1.summaryOfSM);
    }
    public setEstimatedLaborSM() {
        browser.findElement(this.smLocators.getEstimatedLaborSM()).clear();
        browser.findElement(this.smLocators.getEstimatedLaborSM()).sendKeys((<any>prop).Tenant1.estimatedLabor);
    }
    public selectAssignedUserDropDownSM() {
        browser.findElement(this.smLocators.getAssignedUserDropDownSM()).click();
    }
    public setAssignedUserNameSM() {
        browser.findElement(this.smLocators.searchAssignedUserSM()).clear();
        browser.findElement(this.smLocators.searchAssignedUserSM()).sendKeys((<any>prop).Tenant1.assignedUser);
    }
    public searchAssignedUserSM() {
        browser.findElement(this.smLocators.getSearchIconSMDetail()).click();
    }
    public selectAssignedUserSM() {
        browser.findElement(this.smLocators.getAssignedUserSM()).click();
    }
    public async getAssignedUserFromTextBox() {
        return await browser.findElement(this.smLocators.getAssignedUserFromTextBoxSM()).getAttribute('value');
    }
    public setUpGerealTab() {
        this.setSummarySM();
        browser.sleep(1000);
        this.setEstimatedLaborSM();
        browser.sleep(1000);
        this.selectAssignedUserDropDownSM();
        browser.sleep(1000);
        this.setAssignedUserNameSM();
        browser.sleep(1000);
        this.searchAssignedUserSM();
        browser.sleep(1000);
        this.selectAssignedUserSM();
        browser.sleep(1000);
    }
}