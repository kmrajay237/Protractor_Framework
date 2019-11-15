describe('Istock Photos and Videos', ()=> {

	beforeEach(()=>{
        browser.manage().timeouts().implicitlyWait(30000);
        browser.manage().window().maximize();
    });

    afterEach(()=>{
        browser.manage().deleteAllCookies();
    });
    
    it('Opening up a webpage',()=>{
        browser.get("https://www.istockphoto.com/in");
        browser.sleep(2000);
    });

    it('Navigating to different pages in the webpage',()=>{
        browser.get("https://www.istockphoto.com/in");
        browser.sleep(2000);
        browser.element(by.xpath("(//a[text()='Photos'])[1]")).click();
        browser.sleep(2000);
        browser.element(by.xpath("(//a[text()='Illustrations'])[1]")).click();
        browser.sleep(2000);
        browser.element(by.xpath("(//a[text()='Video'])[1]")).click();
        browser.sleep(2000);
        browser.element(by.xpath("(//a[text()='Audio'])[1]")).click();
        browser.sleep(2000);
    });

    it("Verify homepage title",()=>{
        browser.get("https://www.istockphoto.com/in");
        browser.sleep(2000);
        // browser.getTitle().then((title)=>{
        //     console.log("Title is: "+title);
        // });
        var expTitle='Stock Images, Royalty-Free Pictures, Illustrations & Videos - iStock';
        expect(browser.getTitle()).toEqual(expTitle);
        
    });

    it("Verifying if Logo is displayed and Search Text field is Enabled",()=>{
        browser.get("https://www.istockphoto.com/in");
        browser.sleep(2000);
        browser.element(by.xpath("(//img[@alt='iStock logo'])[1]")).isDisplayed();
        browser.element(by.xpath("(//input[@name='phrase'])[2]")).isEnabled();
    });

    it("Verifying Form submission",()=>{
        browser.get("https://www.istockphoto.com/in");
        browser.element(by.xpath("(//a[@class='account'])[1]")).click();
        browser.element(by.xpath("(//input[@required='required'])[3]")).sendKeys("kmrajay237@gmail.com");
        browser.element(by.xpath("(//input[@required='required'])[4]")).sendKeys("Ajay9046933956");
        browser.element(by.id("sign_in")).submit();
        // browser.sleep(5000);
    //     browser.element(by.xpath("(//a[@class='modalClose close-reveal-modal'])[1]")).click();
    //     browser.sleep(2000);
    //     // browser.element(by.xpath("(//img[@class='rest-state'])[3]")).click();
    //     // browser.sleep(2000);
    //     var account=browser.element(by.xpath("//a[text()='Your account']"));
    //     browser.sleep(2000);
    //     account.click();
    //     browser.sleep(2000);
    //     browser.element(by.xpath("(//a[text()='Profile'])[1]")).click();
    //     browser.sleep(2000);
    //     var expProfileId="Your customer number: 19725783";
    //     var actProfileid=browser.element(by.xpath("//li[contains(text(),'19725783')]")).getText();
    //     browser.sleep(2000);
    //     expect(actProfileid).toEqual(expProfileId);
    //     browser.element(by.id('profile_first_name')).sendKeys('Kumar');
    //     browser.element(by.id('profile_last_name')).sendKeys('Ajay');
    //     browser.element(by.id('profile_organization_name')).sendKeys('Infosys');
    //     // browser.element(by.xpath("//span[@class='checkbox']")).click();
    //     browser.element(by.id('update-button')).submit();
    //     account.click();
    //     browser.element(by.xpath("//a[text()='Sign out']")).click();
    });

    it("Verify Dropdown selection and Playing videos on the page",()=>{
        browser.get("https://www.istockphoto.com/in");
        browser.element(by.xpath("//span[@class='arrow-icon down']")).click();
        browser.sleep(2000);
        browser.element(by.xpath("//label[text()='Video']")).click();
        var search=browser.element(by.id('search-phrase'));
        var actAtrVal=search.getAttribute('placeholder')
        // .then((attribute)=>{
        //     console.log(attribute);
        // })
        ;
        var expAtrVal='Find the perfect stock video clips…';
        expect(actAtrVal).toEqual(expAtrVal);
        search.sendKeys("Dance in Rain");
        browser.element(by.xpath("//button[@class='search-bar__submit']")).click();
        browser.element(by.xpath("//a[@data-asset-id='825737768']")).click();
        browser.sleep(10000);
        browser.navigate().back();
    });

    it("Opening up popups in the page",()=>{
        browser.get("https://www.istockphoto.com/in");
        var boards=browser.element(by.id('open_board'));
        boards.click();
        browser.sleep(1000);
        browser.element(by.xpath("//a[text()='Create Board']")).click();
        browser.sleep(1000);
        browser.element(by.xpath("//input[@name='boardname']")).sendKeys('MyBoard');
        browser.element(by.xpath("(//a[@type='submit'])[1]")).click();
        boards.click();
        browser.sleep(1000);
        browser.element(by.xpath("//span[text()='MyBoard']")).click();
        browser.sleep(2000);
        browser.element(by.xpath("//a[text()='Delete this Board']")).click();
        var alrt=browser.switchTo().alert();
        alrt.accept();
        browser.sleep(2000);
    });

    xit("Radio button selection and Checkbox selection (single & multiple)",()=>{
        browser.get("https://www.istockphoto.com/in");
        var search=browser.element(by.id('search-phrase'));
        search.sendKeys('water');
        browser.element(by.xpath("//button[@class='search-bar__submit']")).click();
        browser.element(by.xpath("//div[text()='Refine']")).click();
        browser.element(by.xpath("(//li[@gi-search-parameter='sortorder'])[1]")).click();
        browser.sleep(2000);
        browser.element(by.xpath("(//li[@gi-search-parameter='sortorder'])[2]")).click();
        browser.sleep(2000);
        browser.element(by.xpath("(//li[@gi-search-parameter='sortorder'])[3]")).click();
        browser.sleep(2000);
        browser.element(by.xpath("//label[text()='Only from iStock']")).click();
        browser.sleep(2000);
    });

    
});