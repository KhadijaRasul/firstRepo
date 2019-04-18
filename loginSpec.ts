import { browser } from "protractor";
import { LoginPage } from "../PO/loginPO";
import * as prop from "../../../../TestData/prop.json";
describe("login test", function () {
    let loginPage = new LoginPage();
    let originalTimeout: any;

    beforeAll(function () {
        browser.waitForAngularEnabled(false);
        originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 100000
    })
    afterAll(function () {
        jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
    })

    it("Launch url check", async function () {
        await loginPage.getPage();
        expect(await loginPage.getTitle()).toContain('Fiix');
    });
    it("Sign in text check", async function () {
        expect(await loginPage.getSignInTextLogin()).toContain("Sign in to your account")

    })
    it("Sign in button check", async function () {
        expect(await loginPage.getSignInButtonPresence()).toBe(true);

    })
    it("Forgot password link", async function () {
        expect(await loginPage.getForgotYourPasswordLink()).toContain("Forgot your password?");
    })
    it("Login as user", function () {
        loginPage.setUserName();
        loginPage.setPassword();
        expect(loginPage.getUserNameField().getAttribute('value')).toContain((<any>prop).Tenant1.username);
        expect(loginPage.getPasswordField().getAttribute('value')).toContain((<any>prop).Tenant1.password);
        loginPage.clickLoginButton();
        expect(loginPage.confirmLogin()).toContain("Dashboard");
    })
    it("Logoff as user", async function () {
        loginPage.clickLogOffButton();
        expect(await (loginPage.getSignInButtonPresence())).toBe(true);
    })
})
