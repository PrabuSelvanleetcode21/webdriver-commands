
const path = require('path');

describe('Upload Tests', () => {
    it('Simple upload Test', async () => {
        await browser.url('https://the-internet.herokuapp.com/upload')
        const filepath = path.join(__dirname,'../../data/Webdriverio.png');
        const remotefilepath= await browser.uploadFile(filepath);
        // console.log('filepath is ',filepath);
        await $("#file-upload").setValue(remotefilepath);
        await $("#file-submit").click();
        await expect($('h3')).toHaveText('File Uploaded!');
    });
});