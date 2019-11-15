const home = require('../pages/HomePagePO.js');
var log4jsfun = require("../utilities/log4js.js");

describe('Perform Search Operation in Search box', () => {
    it('Should search and display results', async () => {

        await browser.get('https://www.istockphoto.com/in');
        await browser.manage().timeouts().implicitlyWait(30000);
        await browser.manage().window().maximize();
        await browser.manage().timeouts().pageLoadTimeout(40000);

        var title = browser.getTitle().then(async (txt) => {
            log4jsfun.Log().debug(txt);
        })


        await home.searchBox().search.sendKeys('rain');
        await browser.sleep(5000);
        await home.searchBox().searchBtn.click();
        await browser.sleep(5000);
        await home.searchBox().close.click();
        await browser.sleep(5000);
        await browser.manage().deleteAllCookies();
    });
});