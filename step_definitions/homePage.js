const {createBdd} = require('playwright-bdd')
const {Given, When, Then} = createBdd()

Given('I navigate to {string}', async ({ page }, url) => {
    await page.goto(url)
});


When('the page loads', async ({ }) => {
    // ...
});


Then('the title should be {string}', async ({ page }, inputName) => {
console.log(inputName);
    const inputVisible = await page.locator(`input[id='${inputName}']`).isVisible();
    
});


Then('the input {string} should be present', async ({ }, arg) => {
    
});


Then('the button {string} should be present', async ({ }, arg) => {
    // ...
});