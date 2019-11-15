var shell = require('shelljs');
var fake = require('faker');

describe("File Upload , Download and Data Mocking", () => {

    beforeEach(() => {
        browser.get("https://www.istockphoto.com/in");
        browser.manage().timeouts().implicitlyWait(30000);
        browser.manage().window().maximize();
    });

    afterEach(() => {
        browser.manage().deleteAllCookies();
    });

    it("Should Upload the file", () => {

        browser.element(by.xpath("//a[@title='Search by image']")).click();
        browser.sleep(2000);
        // var popup = browser.element(by.xpath("//a[text()='Choose a file']"));
        browser.findElement(by.xpath("//a[text()='Choose a file']"));
        browser.findElement(by.css('input[type=file]')).sendKeys("C:/Users/Qualitrix/Desktop/appium.PNG");
        browser.sleep(10000);
        browser.findElement(by.className('modalClose close-reveal-modal')).click();
        browser.sleep(10000);
    });

    it("Should Generate Random Test Data", () => {
        console.log(fake.name.firstName());
        console.log(fake.name.lastName());
        console.log(fake.internet.email());
    });

    for (i = 1; i <= 5; i++) {
        it("Multiple Login Operations", () => {
            browser.driver.findElement(by.xpath("(//a[text()='Sign in'])[2]")).click();
            browser.sleep(2000);
            browser.element(by.id('new_session_username')).sendKeys(fake.internet.email());
            browser.sleep(2000);
            browser.element(by.id('new_session_password')).sendKeys(fake.address.streetName());
            browser.sleep(2000);

        });
    }

});