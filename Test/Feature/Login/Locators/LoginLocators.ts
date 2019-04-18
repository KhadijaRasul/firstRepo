import { by } from "protractor";

export class LoginLocators {
    public getDashboardIcon(): any {
        return by.xpath('//div[@class="pk-icon-dashboard"]/span[contains(text(),"Dashboard")]');
    }
}