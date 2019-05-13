module.exports = {
    'Login Test': function(browser) {
        // Browser is the browser that is being controlled
        browser
        .url('http://localhost:4200/login') // Navigate to the url
        .waitForElementVisible('body', 5000) // Wait until you can see the body element.
        .waitForElementVisible('input[type=text]', 1000)
        .waitForElementVisible('input[type=password]', 1000)
        .setValue('input[type=text]', 'admin')
        .setValue('input[type=password]', 'admin')
        .useXpath()     // every selector now must be XPath
        .click("//a[text()='Login']")
    },
    'Add To Favorite Test': function(browser){
        browser
        .waitForElementVisible('body', 2000)
        .click("//a[normalize-space()='Agregar a favoritos']")
        .useCss()
        .click(".nav-link")
        .useXpath()     // every selector now must be XPath
        .click("//a[text()='Favoritos']")
        .useCss()
        //.end() // This must be called to close the browser at the end
    }
}