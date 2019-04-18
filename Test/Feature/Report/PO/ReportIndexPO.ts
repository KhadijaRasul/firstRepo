import { browser } from "protractor";
import { CommonLocators } from "../../../Lib/CommonLocators";
//import { LoginLocators} from "../Locators/ReportLocators";
import { ReportLocators } from "../Locators/ReportLocators";
import * as prop from "../../../../TestData/prop.json";

export class ReportIndexPO {
    commonLocators = new CommonLocators();
    rptLocators = new ReportLocators();



    public clickOnReport() {
        browser.findElement(this.rptLocators.getReportIcon()).click();
    }
    public clickReportIndexPage() {
        browser.findElement(this.rptLocators.getReportIndexPage()).click();
        console.log("weeee");
    }
    public clickReportFilterDropDown(){
        browser.findElement(this.rptLocators.getReportFilterDropDown()).click();
    }
    public clickReportFilter(){
        browser.findElement(this.rptLocators.getReportFilter()).click();
        console.log("shalalal");
    }
    public clickReport(){
        browser.findElement(this.rptLocators.getReport()).click();
        console.log("clicked on report");
    }


    public FindReport() {
        browser.driver.sleep(1000);
        this.clickOnReport();
        browser.driver.sleep(2000);
        this.clickReportIndexPage();
        browser.sleep(2000);
        
        this.clickReportFilterDropDown();
        browser.sleep(2000);
        
        this.clickReportFilter();
        browser.sleep(5000);
        
        this.clickReport();
        browser.sleep(5000);

    }
}

