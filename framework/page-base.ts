import { Page } from "@playwright/test";
import { promises } from "dns";

//publicly available to other classes
export class BasePage{
    page: Page //class member page of type Page

    constructor(page: Page){  //The constructor is called when an instance of BasePage is created.
        this.page = page;
    }

    public async navigateUrl(url: string): Promise<void>{
        await this.page.goto(url);
    }

    public async waitForPageLoad(): Promise<void>{
        await this.page.waitForLoadState('domcontentloaded');
   
    }
}