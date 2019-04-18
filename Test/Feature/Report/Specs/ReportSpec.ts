import { browser } from "protractor";
import { LoginPage } from "../../Login/PO/loginPO";
import { MainReportPage } from "../PO/MainReportPO";
import * as prop from "../../../../TestData/prop.json";

    describe("Scheduled Maintenance", function () {
        let loginPage = new LoginPage();
        let RPT = new MainReportPage ();

        let originalTimeout: any;
      
        beforeAll(async function () {
          browser.waitForAngularEnabled(false);
          originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
          jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000000;
        })
        afterEach(function () {
          browser.sleep(1000);
        })
        afterAll(function () {
          jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
        })
      
        it("Launch url check", async function () {
          await loginPage.getPage();
          expect(await loginPage.getTitle()).toContain('Fiix');
        });
        it("Login as user", function () {
          loginPage.setUserName();
          loginPage.setPassword();
          expect(loginPage.getUserNameField().getAttribute('value')).toContain((<any>prop).Tenant1.username);
          expect(loginPage.getPasswordField().getAttribute('value')).toContain((<any>prop).Tenant1.password);
          loginPage.clickLoginButton();
          expect(loginPage.confirmLogin()).toContain("Dashboard");
        })
        it("Genearte Report", function () {
            browser.sleep(1000);
            RPT.runReport();
           /* RPT.clickOnReport();
            browser.sleep(1000);
            RPT.clickReportIndexPage()
            browser.sleep(5000);
            RPT.clickReportDropDown()
            browser.sleep(5000);*/
        })

})
