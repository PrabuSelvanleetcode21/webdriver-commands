const HomePage = require('../../pages/HomePage');

describe.skip('Testing All WebDriver Commands ', () => {

    // const iframe1 = $("#iframe1");
    beforeEach(async () => {
        await HomePage.open();
    });

    it('Multiple Window handles', async () => {

        // await HomePage.open();
        // console.log('Parent Window get Source is ', await browser.getSource());
        let parentWindow = await browser.getWindowHandle();
        await browser.maximizeWindow();
        await browser.saveScreenshot('./screenshots/temp.png');
        await browser.pause(5000);
        let source =  await browser.getPageSource();
        // console.log('getPageSource is ', source);
        console.log('Parent Window is ', parentWindow);

        // await browser.debug();
        // await $("//div//p//a[text()='Open a popup window']").click();
        
        // let allWindows = await browser.getWindowHandles();
        // for (let val of allWindows) {
        //     console.log('Windows are ', val);
        //     if (val!=parentWindow) {
        //         await browser.switchToWindow(val);
        //         await browser.maximizeWindow();
        //         let title = await browser.getTitle();
        //         console.log('Child Window Title is ', title);
        //         console.log('Child Window Url is ', await browser.getUrl())
        //         // let source=await  browser.getSource();
        //         console.log('Child Window get Source  is ', source);

        //         break;
        //     }
        // }
        
    });

    it('Handling CheckBoxes',  async () => {
     
        await HomePage.clickBothCheckBoxes();
     
    });

    it('Click RadioButtons', async () => {
        await HomePage.clickMaleRadioBtn();
        await HomePage.clickFeMaleRadioBtn();
    });

    it('Enter Text Fields', async () => {
        await HomePage.enterTextField("This is Selenium","Welcome to Webdriver io");
    });

    it('Locating iframe', async () => {

        await HomePage.changeFrame();
    });

    it('ScrollIntoView',async () => {
        await HomePage.scrollDown();
        await HomePage.saveScreenshotone();
    });
    it('Click Selenium143',async () => {
        await HomePage.clickSelenium143();
        await HomePage.saveScreenshotone();
        await HomePage.windowHandles();
        await HomePage.saveScreenshotone();
    });

    it('Multiple Elements ', async()=> {
        await HomePage.setWindowSize();
        await HomePage.getElements(); 
    })
    it('Entering Keys', async ()=> {
        await HomePage.enterValuesAndPressEnter();
    })

    it('Handling Alerts Get Alert', async ()=> {
            await HomePage.clickGetAlert()
    })

    it('Handling Alerts Send Alert', async () => {
        await HomePage.clickSendAlert("Hey Prabu");
    });

    it('Double Click on Button', async ()=> {
        await HomePage.doubleClickOnButton();
    })

    it('Click Checkbox if is enabled', async ()=> {
        await HomePage.clickCheckBox();
    })
    it('Handling Delayed Dropdown', async ()=> {
        await HomePage.clickDelayedDropdown();
    })
    it('Uploading file ', async ()=> {
        await HomePage.handlingUploadFiles('/Users/prabuselvan/Downloads/empty.txt');
    })
   

});