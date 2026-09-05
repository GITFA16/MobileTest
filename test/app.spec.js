describe('Login Belajar Bareng', () => {

    it('should login successfully', async () => {

        await driver.activateApp('com.example.belajar_bareng');

        console.log('✅ Application opened successfully');

        const loginPageTitle = await $('~Belajar Bareng');
        await loginPageTitle.waitForDisplayed({ timeout: 10000 });

        // Ambil semua input field
        const inputFields = await $$('android.widget.EditText');

        // Email
        const email = inputFields[0];
        await email.waitForDisplayed({ timeout: 10000 });
        await email.click();
        await email.setValue('faizal.skola@example.com');

        // Password
        const password = inputFields[1];
        await password.waitForDisplayed({ timeout: 10000 });
        await password.click();
        await password.setValue('123456');

        // Supaya field terlihat sudah terisi
        await browser.pause(2000);

        // Login
        const loginButton = await $('~Login');
        await loginButton.waitForDisplayed({ timeout: 10000 });
        await loginButton.click();

        // Assertion setelah login
        const homeTitle = await $('~Belajar Bareng');
        await homeTitle.waitForDisplayed({ timeout: 10000 });
        await expect(homeTitle).toBeDisplayed();

        const postingButton = await $('~Posting');
        await postingButton.waitForDisplayed({ timeout: 10000 });
        await expect(postingButton).toBeDisplayed();

        console.log('✅ Login successful - Belajar Bareng and Posting are displayed');

        // Scroll sampai menemukan postingan
        // Tidak bisa karena contect desc bukan text 

        // const testPostingan = await $(
        //     'android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("Test Postingan, apakah terlihat?")' 
        // );
           
        const testPostingan = await $(
            'android=new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(new UiSelector().descriptionContains("Test Postingan, apakah terlihat?"))'
        );

        await testPostingan.waitForDisplayed({ timeout: 10000 });
        await expect(testPostingan).toBeDisplayed();

        console.log('✅ Test Postingan terlihat setelah scroll');

        await browser.pause(5000);

        // Tutup aplikasi setelah test selesai
        await driver.terminateApp('com.example.belajar_bareng');

        console.log('✅ Application closed successfully');

    });

});