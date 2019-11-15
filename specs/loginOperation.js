const home=require('../pages/HomePagePO.js');

describe('Performing Login Operation',()=>{
    beforeEach(async ()=>{
        await browser.manage().timeouts().implicitlyWait(30000);
        await browser.manage().window().maximize();
    });

    afterEach(async ()=>{
        await browser.manage().deleteAllCookies();
    });

    it('Should Login to the application',async ()=>{
        await browser.get('https://www.istockphoto.com/in');
        browser.sleep(3000);
        await home.homepage().click();
        browser.sleep(3000);
        await home.loginpage().email.sendKeys('kmrajay237@gmail.com');
        browser.sleep(3000);
        await home.loginpage().password.sendKeys('Ajay9046933956');
        browser.sleep(3000);
        await home.loginpage().signinBtn.click();
        browser.sleep(3000);
    });
});