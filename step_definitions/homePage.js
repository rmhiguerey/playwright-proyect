const {createBdd} = require('playwright-bdd')
const {Given, When, Then} = createBdd()

Given('I navigate to {string}', async ({ page }, url) => {
    await page.goto(url)
});


When('the page loads', async ({ }) => {
    // ...
});


Then('the title should be {string}', async ({ page }, title) => {
    await page.getByText(title).isVisible()
});


Then('the input {string} should be present', async ({ page }, inputName, inputPrice ) => {
    await page.locator(`input[id='${inputName}']`).isVisible();
    await page.locator(`input[id='${inputPrice}']`).isVisible();
});


Then('the button {string} should be present', async ({ page }, button) => {
    const inputVisible = await page.locator(`button[id='${button}']`).isVisible();
});