module.exports = {
    'Login Test': function(browser) {
        // Browser is the browser that is being controlled
        browser
        .url('http://localhost:4200/login') // Navigate to the url
        .waitForElementVisible('body', 5000) // Wait until you can see the body element.
        .waitForElementVisible('input[type=text]', 1000)
        .waitForElementVisible('input[type=password]', 1000)
        .setValue('input[type=text]', 'admin')
        .setValue('input[type=password]', '1')
        .click(".btn-primary")
    },
    'Add To Favorite Test': function(browser){
        browser
        .waitForElementVisible('body')
        .waitForElementVisible(".nav-link")
        .click(".nav-link")
        .useXpath()
        .click("//a[@id='0']")
        .click("//a[@id='favoritos']")
        //.end() // This must be called to close the browser at the end
    }
}