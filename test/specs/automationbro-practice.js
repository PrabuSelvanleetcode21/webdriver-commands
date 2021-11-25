
const heading =  require('../../pages/heading');

beforeEach(() => {
    heading.open();
});

describe('Testing basic functionalities', () => {
    it('Find heading element and asserting the text', async ()=> {
        await heading.validatingHeaderText();
    })

    it('Validating Header menu links', async () => {

        await heading.validatingMenusinHomePage();
        
    });
});