import { browser } from "protractor";
import { LoginPage } from "../../Login/PO/loginPO";
import { MainScheduledMaintenancePO } from "../PO/MainScheduledMaintenancePO";
import { ScheduledMaintenanceIndexPO } from "../PO/ScheduledMaintenanceIndexPO";
import * as prop from "../../../../TestData/prop.json";

describe("Scheduled Maintenance", function () {
  let loginPage = new LoginPage();
  let SM = new MainScheduledMaintenancePO();
  let SMIndex = new ScheduledMaintenanceIndexPO();
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
    console.log(">>>>>Test for Creating and Assigning new scheduled maintenance done<<<<<\n");
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
  it("Create and Assign new scheduled maintenance", async function () {
    SMIndex.selectSite();
    let smCode = await SM.createAndReturnAssignedSMCode();
    expect(await SMIndex.searchForSM(smCode)).toEqual(smCode);
    
    SMIndex.openSM();
    
    expect(await SM.checkStatus()).toEqual((<any>prop).Tenant1.status);
    expect(await SM.checkPriority()).toEqual((<any>prop).Tenant1.priority);
    expect(await SM.checkMaintenance()).toEqual((<any>prop).Tenant1.maintenance);
    expect(await SM.checkAssignedUser()).toEqual((<any>prop).Tenant1.assignedUser);
   // expect(await SM.checkScheduling()).toEqual((<any>prop).Tenant1.triggerDescription);
   // expect(await SM.checkLogForWO()).toEqual((<any>prop).Tenant1.summaryOfSM);
    
    SM.returnToSMIndexPage();
    SMIndex.deleteSM()
  })
  it("Logoff as user", async function () {
    loginPage.clickLogOffButton();
    expect(await (loginPage.getSignInButtonPresence())).toBe(true);

  })
})
