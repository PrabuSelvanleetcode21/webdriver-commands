const Page = require('./Page');
const  expect = require('chai').expect;

class Heading extends Page {

    async open() {
        await  super.open();
     }

    get h1Text() { return $("//h1[text()='Think different. Make different.']") }
    get allmenus() { return $$("#primary-menu li[id*='menu']") }
    get homeMenu() {return $("(//ul[@id='primary-menu']/li)[1]") }


    async validatingHeaderText() {
        const text = await this.h1Text.getText();
        // await expect(text).toEqual('Think different. Make different.') //using chai
        // await expect(this.h1Text).toHaveText('Think different. Make different.');
    }

    async validatingMenusinHomePage() {
        const actualElements= [
            'Home',
            'About',
            'Blog',
            'Shop',
            'My account',
            'Contact',   
        ]
        await browser.waitUntil(async ()=> {
            const homeText =  await this.homeMenu.getText();
            console.log('Home Text is ', homeText);
            return homeText==='Home'

        },{
            timeoutMsg: 'Could not verify the Home Page link homeMenu'
        
        })
        await this.homeMenu.waitForDisplayed({timeout: 3000})
        const expectedElements = [];
        await this.allmenus.forEach(async (menu)=> {
            expectedElements.push(await menu.getText());
        })

        await expect(actualElements).to.deep.equal(expectedElements);

    } 
}

module.exports = new Heading();