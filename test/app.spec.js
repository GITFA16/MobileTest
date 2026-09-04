describe('Open App', () => {

    it('should launch the app', async () => {
        await driver.activateApp('com.example.belajar_bareng');

        console.log('✅ Application opened successfully');
        
        await browser.pause(5000);

        await browser.terminateApp('com.example.belajar_bareng');

    });

    after(async () => {
        await browser.terminateApp('com.example.belajar_bareng');
    });
    
});