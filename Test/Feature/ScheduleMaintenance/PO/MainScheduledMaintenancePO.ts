import { browser } from "protractor";
import { CommonLocators } from "../../../Lib/CommonLocators";
import { SMLocators } from "../Locators/SMLocators";
import { SMSchedulingTabPO } from "./SMSchedulingTabPO";
import { SMTopPanePO } from "./ScheduleMaintenanceTopPanePO";
import { SMGeneralTabPO } from "./SMGeneralTabPO";
import { SMLogTabPO } from "./SMLogTabPO";

export class MainScheduledMaintenancePO {
    smLocators = new SMLocators();
    commonLocators = new CommonLocators();
    SMScheduling = new SMSchedulingTabPO();
    SMTopPane = new SMTopPanePO();
    SMGeneral = new SMGeneralTabPO();
    SMLog = new SMLogTabPO();

    public async checkStatus() {
        return await this.SMTopPane.getStatusFromTextBox();
    }
    public async checkPriority() {
        return await this.SMTopPane.getPriorityFromTextBox();
    }
    public async checkMaintenance() {
        return await this.SMTopPane.getMaintenanceFromTextBox();
    }
    public async checkAssignedUser() {
        return await this.SMGeneral.getAssignedUserFromTextBox();
    }
    public async checkScheduling() {
        return await this.SMScheduling.getTriggerDescFromTextBox();
    }
    public async checkLogForWO() {
        return await this.SMLog.getWODescFromTextBox();
    }
    
    public async returnToSMIndexPage() {
        this.SMTopPane.clickBack();
        browser.driver.sleep(5000);
    }

    public createCompleteSM() {
        this.SMTopPane.setUpTopPane();
        browser.driver.sleep(1000);
        this.SMGeneral.setUpGerealTab();
        browser.driver.sleep(2000);
        this.SMScheduling.setUpSchedule()
        browser.sleep(2000)

        this.SMTopPane.clickSave();
        browser.driver.sleep(1000);

        this.SMTopPane.generateWONow();
        browser.driver.sleep(1000);
    }


    public createAndAssignSM() {
        this.SMTopPane.setUpTopPane();
        browser.sleep(2000)
        this.SMGeneral.setUpGerealTab();
        browser.driver.sleep(2000);

        this.SMTopPane.clickSave();
        browser.driver.sleep(1000);

        this.SMTopPane.generateWONow();
        browser.driver.sleep(1000);
    }

    public async createAndReturnCompleteSMCode() {
        this.createCompleteSM();
        browser.driver.sleep(2000);
        let smCode = await this.SMTopPane.getSMCode();
        browser.driver.sleep(500);
        this.returnToSMIndexPage();
        return smCode;
    }

    public async createAndReturnAssignedSMCode() {
        this.createAndAssignSM();
        browser.driver.sleep(2000);
        let smCode = await this.SMTopPane.getSMCode();
        browser.driver.sleep(500);
        this.returnToSMIndexPage();
        return smCode;
    }

    public async createAndReturnSMCode() {
        browser.sleep(2000)
        this.SMTopPane.clickSave();
        browser.driver.sleep(1000);
        let smCode = await this.SMTopPane.getSMCode();
        browser.driver.sleep(500);
        this.returnToSMIndexPage();
        return smCode;
    }
}
