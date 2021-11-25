const Page =  require('../pages/Page');

class HomePage extends Page {

    async open() {
       await  super.open();
        // return browser.url('/');
    }

    get orangeCheckBox() {  return $("#checkbox1") }
    get blueCheckBox() { return $("#checkbox2") }
    get maleRadioBtn() { return $("#radio1")}
    get femaleRadioBtn() { return $("#radio2")}
    get textareaField() {return $("#ta1") }
    get textboxwithtext() { return $("#textbox1")}
    get frameid() { return $("#iframe1")}
    get CheckthisBtn() { return $("//button[text()='Check this']")};
    get Selenium143() { return $("#selenium143")}
    get multipleElements() { return $$("//ol/li") }
    get ClickAlertBtn () { return $("#alert1") }
    get GetPromptBtn() { return $("#prompt") }
    get DoubleClickBtn() { return $("//button[text()=' Double click Here   ']")};
    get mroptionchkbox() { return $("#dte") }
    get clickDropDown() { return $("//button[text()='Dropdown']") }
    get facebook() { return $("//a[text()='Facebook']") }
    get chooseFile() { return $("#file-upload") }
    get uploadBtn() { return $("#file-submit") }
    get fileuploadVerification() { return $("//h3[text()='File Uploaded!']") }

    async clickOrangeCheckBox() {
        const val = await this.orangeCheckBox.isSelected();
        if (!val) await this.orangeCheckBox.click();
    }
    async clickBlueCheckBox() {
        const val = await this.blueCheckBox.isSelected();
        if(!val) await this.blueCheckBox.click();
    }

    async clickBothCheckBoxes() {
        await this.clickOrangeCheckBox();
        await this.clickBlueCheckBox();
    }

    async clickMaleRadioBtn() {
        const val = await this.maleRadioBtn.isSelected();
        if (!val) await this.maleRadioBtn.click();
    }
    async clickFeMaleRadioBtn() {
        const val = await this.femaleRadioBtn.isSelected();
        if (!val) await this.femaleRadioBtn.click();
    }
    async enterTextField(text1, text2) {
        await this.textareaField.setValue(text1);
        await this.textboxwithtext.setValue(text2);
    }
    async changeFrame() {
        // await browser.switchToFrame(frameid);
        await this.switchToIFrame(this.frameid);
        // const val = await this.iFrame1el.isDisplayed();
        // console.log('Change Frame is ', val);
    }

    async scrollDown() {
        await this.CheckthisBtn.scrollIntoView();
        await browser.pause(4000);
    }

    async takeScreenshot() {
        super.saveScreenshotone();
    }
    async clickSelenium143() {
        await this.Selenium143.click();
    }

    async windowHandles(){
        const parentwindow = await browser.getWindowHandle();
        const windows = await browser.getWindowHandles();
        for (let window of windows) {
            if(window!= parentwindow){
                await browser.switchToWindow(window);
                const childWindowTitle = await browser.getTitle();
                console.log('childWindowTitle ', childWindowTitle);
                break;
            }
        }

        await browser.switchToWindow(parentwindow);
        console.log('Parent Window Title ', await browser.getTitle());
        await browser.pause(4000);
    }

    async getElements() {
         await this.multipleElements.forEach((element)=> {
             console.log( element.getText());
         })

        // const elements = await this.multipleElements;
        // for (el of elements) {
        //     console.log('el is ',el.getText());
        // }   
    }

    async enterValuesAndPressEnter() {
        await this.textareaField.setValue("WebDriver IO");
        await browser.pause(5000);
        await browser.keys('Enter');
        await browser.pause(3000);
        await browser.keys('Enter');
        await browser.pause(3000);
        await browser.keys('Enter');
        await browser.pause(3000);
        await browser.keys('Enter');
    }
    async clickGetAlert() {
        await this.ClickAlertBtn.click();
        // await browser.debug();
        await browser.pause(5000);
        const text = await browser.getAlertText();
        await console.log('Alert text is ',text);
        await browser.acceptAlert();
        await browser.pause(5000);
    }
    
    async clickSendAlert(text) {
        await this.GetPromptBtn.click();
        await browser.pause(3000);
        await browser.sendAlertText(text);
        await browser.pause(3000);
    }

    async doubleClickOnButton() {
        await this.DoubleClickBtn.click();
        const text = await browser.getAlertText();
        console.log('text is ', text);
        await browser.acceptAlert();
    }

    async clickCheckBox() {
        const val = await this.mroptionchkbox.isSelected();
        console.log('val is ', val);
        if(!val) { 
            await this.mroptionchkbox.click();
        } else {
            console.log('mroptionchkbox check box is disabled');
        }
    }

    async clickDelayedDropdown() {
        await this.clickDropDown.click()
        await this.facebook.waitForClickable({timeout: 7000});
        await this.facebook.click();
       const url = await browser.getUrl();
       console.log('Url is ', url);
        await expect(browser).toHaveUrl('https://www.facebook.com/')
    }

    async handlingUploadFiles(path) {
        await this.chooseFile.click();
        const remotepath = await browser.uploadFile(path);
        console.log('remote path is ', remotepath);
        // await this.chooseFile.setValue(remotepath);
        // await this.uploadBtn.click();
        // const text = await this.fileuploadVerification.getText(); 
        // console.log('text is ', text);
    }
}

module.exports =  new HomePage();