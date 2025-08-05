import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { Page } from 'playwright';
import { homeLocators } from '../../locators/home';
import { CustomWorld } from '../../tests/support/custom-world';

let page: Page;

Given('Open Browser and Visit Website', async function (this: CustomWorld) {
  page = this.page;
  await page.goto(process.env.BIKROY_URL || 'https://bikroy.com/');
});

When('Check that bikroy logo is present', async function () {
  await expect(page.locator(homeLocators.logo)).toBeVisible();
});
Then('Click on search box', async function () {
  await page.waitForSelector(homeLocators.search_box, { state: 'visible' });
  await page.click(homeLocators.search_box);
});

When('Enter text to search option', async function () {
  await page.fill(homeLocators.search_box, 'iphone');
});

Then('Click on search option', async function () {
  await page.click(homeLocators.search);
});

When('Back to the previous page', async function () {
  await page.goBack();
});

// // Generic check function for all logos
// const checkLogoVisible = (locator: string) => {
//   return async () => {
//     await page.waitForSelector(locator, { state: 'visible' });
//   };
// };

// When('Check that Mobiles logo is present', checkLogoVisible(homeLocators.mobiles));
// Then('Check that Electronics logo is present', checkLogoVisible(homeLocators.electrics));
// Then('Check that Vehicles logo is present', checkLogoVisible(homeLocators.vehicles));
// Then('Check that Property logo is present', checkLogoVisible(homeLocators.property));
// Then('Check that Home & Living logo is present', checkLogoVisible(homeLocators.homeLiving));
// Then('Check that Pets & Animals logo is present', checkLogoVisible(homeLocators.petsAnimals));
// Then('Check that Mens Fashion & Grooming logo is present', checkLogoVisible(homeLocators.mensFashion));
// Then('Check that Womens Fashion & Beauty logo is present', checkLogoVisible(homeLocators.womensFashion));
// Then('Check that Hobbies,Sports & kids logo is present', checkLogoVisible(homeLocators.hobbiesSportsGrooming));
// Then('Check that business & industry logo is present', checkLogoVisible(homeLocators.businessIndustry));
// Then('Check that education logo is present', checkLogoVisible(homeLocators.education));
// Then('Check that Essentials logo is present', checkLogoVisible(homeLocators.essentials));
// Then('Check that agriculture logo is present', checkLogoVisible(homeLocators.agriculture));
// Then('Check that Jobs logo is present', checkLogoVisible(homeLocators.jobs));
// Then('Check that Services logo is present', checkLogoVisible(homeLocators.services));
// Then('Check that Overseas Jobs logo is present', checkLogoVisible(homeLocators.overseas));


// When('Check that login button is present', async () => {
//   await expect(page.locator(homeLocators.login)).toBeVisible();
// });

// Then('Click on login button', async () => {
//   await page.locator(homeLocators.login).click();
// });

// Then("Click on 'ইমেইল দিয়ে লগ ইন করুন'", async () => {
//   await page.locator(homeLocators.emaillogin).click();
// });

// When('Enter valid email', async () => {
//   await page.locator(homeLocators.emailbox).click();
//   await page.locator(homeLocators.emailbox).fill('fahim1.qups@gmail.com');
// });

// When('Enter valid password', async () => {
//   await page.locator(homeLocators.passwordbox).click();
//   await page.locator(homeLocators.passwordbox).fill('12345');
// });

// Then('Click login button', async () => {
//   await page.locator(homeLocators.loginbutton).click();
// });

// When('Check that browse items by category is visible', async () => {
//   await expect(page.locator(homeLocators.category)).toBeVisible();
// });

// Then('Click on mobiles', async () => {
//   await page.locator(homeLocators.mobilescategory).click();
// });

// When('Search mobile model', async () => {
//   await page.locator(homeLocators.categorysearch_box).fill('Redmi Note 8');
// });

// Then('Click on search icon', async () => {
//   await page.locator(homeLocators.categorysearch_button).click();
// });

// Then('Check that search list is visible', async () => {
//   const searchList = page.locator(homeLocators.categorysearch_list);
//   await expect(searchList).toBeVisible();
//   await expect(searchList).toContainText('Redmi Note 8');
// });

// Then('Click on electronics', async () => {
//   await page.locator(homeLocators.electricscategory).click();
// });

// When('Search  electronics', async () => {
//   await page.locator(homeLocators.categorysearch_box).fill('Asus vivobook s15');
// });

// Then('Check that that electrinics list is visible', async () => {
//   const resultList = page.locator(homeLocators.electricssearchlist);
//   await expect(resultList).toBeVisible();
//   await expect(resultList).toContainText('Asus vivobook s15');
// });

// Then('Click on vehicles', async () => {
//   await page.locator(homeLocators.vehiclescategory).click();
// });

// When('Search  vehicles', async () => {
//   await page.locator(homeLocators.categorysearch_box).fill('Yamaha R15 v3');
// });

// Then('Check that vehicles list is visible', async () => {
//   const resultList = page.locator(homeLocators.electricssearchlist);
//   await expect(resultList).toBeVisible();
//   await expect(resultList).toContainText('Yamaha R15 v3');
// });

// Then('Click on Property', async () => {
//   await page.locator(homeLocators.propertycategory).click();
// });

// When('Search  Property', async () => {
//   await page.locator(homeLocators.categorysearch_box).fill('flat');
// });

// Then('Check that Property list is visible', async () => {
//   const resultList = page.locator(homeLocators.electricssearchlist);
//   await expect(resultList).toBeVisible();
//   await expect(resultList).toContainText('Flat');
// });

// Then('Click on home & living', async () => {
//   await page.locator(homeLocators.homeLivingcategory).click();
// });

// When('Search  home & living', async () => {
//   await page.locator(homeLocators.categorysearch_box).fill('Tea table');
// });

// Then('Check that home & living list is visible', async () => {
//   const resultList = page.locator(homeLocators.electricssearchlist);
//   await expect(resultList).toBeVisible();
//   await expect(resultList).toContainText('Tea table');
// });

// Then('Click on Pets & Animals', async () => {
//   await page.locator(homeLocators.petsAnimalscategory).click();
// });

// When('Search  Pets & Animals', async () => {
//   await page.locator(homeLocators.categorysearch_box).fill('Persian cat');
// });

// Then('Check that Pets & Animals list is visible', async () => {
//   const resultList = page.locator(homeLocators.electricssearchlist);
//   await expect(resultList).toBeVisible();
//   await expect(resultList).toContainText('Persian cat');
// });

// Then("Click on Women's Fashion & Beauty", async () => {
//   await page.locator(homeLocators.womensFashioncategory).click();
// });

// When("Search  Women's Fashion & Beauty", async () => {
//   await page.locator(homeLocators.categorysearch_box).fill('3 pis');
// });

// Then("Check that Women's Fashion & Beauty list is visible", async () => {
//   const resultList = page.locator(homeLocators.electricssearchlist);
//   await expect(resultList).toBeVisible();
//   await expect(resultList).toContainText('3 pis');
// });
