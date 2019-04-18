import { browser } from "protractor";
import { CommonLocators } from "../../../Lib/CommonLocators";
//import { LoginLocators} from "../Locators/ReportLocators";
import { ReportLocators } from "../Locators/ReportLocators";
import { ReportIndexPO} from "./ReportIndexPO";
import { ReportDetailPO} from "./ReportDetailPO";
import * as prop from "../../../../TestData/prop.json";

export class MainReportPage {
    commonLocators = new CommonLocators();
    rptLocators = new ReportLocators();
    ReportIndex = new ReportIndexPO();
    ReportDetail=new ReportDetailPO();
    

    public runReport() {
        browser.driver.sleep(1000);
        this.ReportIndex.FindReport();
        console.log("inside main report..about to complete test");
        browser.sleep(2000);
        this.ReportDetail.RunReport();
        browser.sleep(2000);
        
    }
}

