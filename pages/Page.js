
module.exports = class Page {
    //to go to a URL 
    open () {
        return browser.url('https://practice.automationbro.com/');
    }


    switchToIFrame(frameid) {
         browser.switchToFrame(frameid);
    }

    saveScreenshotone() {
         browser.saveScreenshot(`./screenshots/test1${Math.floor(Math.random()*1000000)}.png`)

    }
    setWindowSize() {
        return browser.setWindowSize(300,300);
    }
}