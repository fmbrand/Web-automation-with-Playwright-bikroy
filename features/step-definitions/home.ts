import { Given, When, Then } from "@cucumber/cucumber";
import { chromium, Browser, Page } from "playwright";
import { homelocators } from "../../locators/home";

let browser: Browser;
let page: Page;

Given("I launch the Playwright site",{ timeout: 20000 }, async function () {
  browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  page = await context.newPage();
  await page.goto("https://playwright.dev");
});

When('I search for {string}', async function (searchText: string) {
  await page.click(homelocators.searchbutton);
  await page.fill(homelocators.searchInput, searchText);
  await page.keyboard.press("Enter");
});

Then("I should see results", async function () {
  const result = await page.waitForSelector(homelocators.searchResultText);
  if (!result) throw new Error("No search results found");
  await browser.close();
});
