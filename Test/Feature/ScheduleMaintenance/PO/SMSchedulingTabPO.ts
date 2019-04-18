import { browser } from "protractor";
import { CommonLocators } from "../../../Lib/CommonLocators";
import { SMLocators } from "../Locators/SMLocators";

export class SMSchedulingTabPO {
    smLocators = new SMLocators();
    commonLocators = new CommonLocators();

    public clickSchedulingTab() {
        browser.findElement(this.smLocators.getSchedulingTab()).click();
    }
    public selectSchedulingRadioButtonAny() {
        browser.findElement(this.smLocators.getSchedulingRadioButtonAny()).click();
    }
    public clickAddSchedule() {
        browser.findElement(this.smLocators.getAddScheduleButton()).click();
    }
    public clickHourlyButtonSMTrigger() {
        browser.findElement(this.smLocators.getHourlyButtonSMTrigger()).click();
    }
    public clickSaveButtonSMTrigger() {
        browser.findElement(this.smLocators.getSaveButtonSMTrigger()).click();
    }
    public async getTriggerDescFromTextBox() {
        this.clickSchedulingTab();
        browser.sleep(3000);
        return await browser.findElement(this.smLocators.getTriggerDesc()).getText();
    }

    public setUpSchedule() {
        // browser.driver.sleep(5000);
        this.clickSchedulingTab();
        browser.driver.sleep(1000);
        this.selectSchedulingRadioButtonAny();
        browser.driver.sleep(2000);
        this.clickAddSchedule();
        browser.driver.sleep(1000);
        this.clickHourlyButtonSMTrigger();
        browser.driver.sleep(1000);
        this.clickSaveButtonSMTrigger();
        browser.driver.sleep(5000);
    }


}