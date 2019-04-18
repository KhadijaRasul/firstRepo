import { browser } from "protractor";
import { CommonLocators } from "../../../Lib/CommonLocators";
//import { LoginLocators} from "../Locators/ReportLocators";
import { ReportLocators } from "../Locators/ReportLocators";
import * as prop from "../../../../TestData/prop.json";

export class ReportDetailPO {
    commonLocators = new CommonLocators();
    rptLocators = new ReportLocators();



    public clickOnRunButton() {
        browser.findElement(this.rptLocators.getRunButton()).click();
    }
   public clickFromDate() {
         browser.findElement(this.rptLocators.getReportFromDate()).click();
        console.log("weeee");
    }
    public clickToDate() {
        browser.findElement(this.rptLocators.getReportToDate()).click();
       console.log("weeee");
   }
    /*public clickReportFilterDropDown(){
        browser.findElement(this.rptLocators.getReportFilterDropDown()).click();
    }
    public clickReportFilter(){
        browser.findElement(this.rptLocators.getReportFilter()).click();
        console.log("shalalal");
    }
    public clickReport(){
        browser.findElement(this.rptLocators.getReport()).click();
        console.log("clicked on report");
    }*/


    public RunReport() {
        browser.driver.sleep(1000);
        this.clickOnRunButton();
        browser.driver.sleep(2000);
        this.clickFromDate();
        browser.driver.sleep(2000);
        /*this.selectFromDatePicker();
        browser.sleep(2000);
        this.selectToDatePicker();
        browser.sleep(2000);
        
        this.clickReportFilterDropDown();
        browser.sleep(2000);
        
        this.clickReportFilter();
        browser.sleep(5000);
        
        this.clickReport();
        browser.sleep(5000);*/

    }
}

