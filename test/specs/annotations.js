describe('Testing annotations',  () => {
   
    before(() => {
        console.log('This is before method this will run only once before first test');
    });

    beforeEach(() => {
        console.log('This is before each method this will run before each test');
    });
    it('First Test', async () => {
        await console.log('First Test');
    });
    it('Second Test', async () => {
        await console.log('Second Test');
    });
    it('Third Test', async () => {
        await console.log('Third Test');
    });
    it('Forth Test', async () => {
        await console.log('Forth Test');
    });
    it('Fifth Test', async () => {
        await console.log('Fifth Test');
    });

    after(() => {
        console.log('This is after method it will run only once after all test')
    });

    afterEach(() => {
        console.log('Thsi is aftereach this will run after each test');
    });
});