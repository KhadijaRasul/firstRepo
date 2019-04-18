import { by } from "protractor";
import * as prop from  "../../../../TestData/prop.json";


export class ReportLocators {
    public getReportIcon(){
        return by.className('pk-icon-reports');
    }
    public getReportIndexPage(){
        return by.xpath('//*[@class="pk-active"]/ul[@class="pk-subnavigation"]/li[contains(text(),"Reports")]');
    }
    public getReportFilterDropDown(){
        //console.log("lalalal");
        return by.xpath('//div[contains(@id,"_filter_btn")]');
    }
    public getReportFilter(){
        //console.log("lalalal");
        return by.xpath('//div[@class="modalWindowFrame ui-draggable"]/span[contains(@id,"_bd")]//div[@class="contentPaneFrameModal"]//div[@class="listLargeMain"]//div[contains(@id,"_bd")]//tbody[contains(@id,"_tbodyx")]//p[contains(text(),"'+(<any>prop).Tenant1.reportCategoryName+'")]');
    }
    public getReport(){
        console.log("apr 15");
        return by.xpath('//div[contains(@id,"__contentFrame")]//div[contains(@id,"_bd")]//div[@id="Reports_tableContainer"]//tbody[contains(@id,"_tbodyx")]//p[contains(text(),"'+(<any>prop).Tenant1.reportName+'")]');
    }  
    public getRunReportButton(){
        console.log("apr 15");
        return by.xpath('//div[contains(@id,"__contentFrame")]//div[contains(@id,"_bd")]//div[@id="Reports_tableContainer"]//tbody[contains(@id,"_tbodyx")]//p[contains(text(),"'+(<any>prop).Tenant1.reportName+'")]');
    } 
    public getRunButton(){
        return by.id('contextButtonRun');
    }
    
    public getReportFromDate(){
        //console.log("lalalal");
        return by.xpath('//div[@class="modalWindowFrame ui-draggable"]//span[contains(@id,"_bd")]//div[@id="_var_p_1_dateTrigger"]');
    }
    public getReportToDate(){
        //console.log("lalalal");
        return by.xpath('//div[@class="modalWindowFrame ui-draggable"]//span[contains(@id,"_bd")]//div[@class="contentPaneFrameModal"]//div[@id="_var_p_2_dateTrigger"]');
    }
}