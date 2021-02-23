
const adminPanel = require("../pageObjects/adminPanelPage");
const homePage = require("../pageObjects/homePage");
const brandingPage = require("../pageObjects/brandingPage");
const faker = require('faker');

describe('Given admin user is logged in', () => {
    before(() => {
        homePage.load();
        homePage.clickAdminPanelLink();
        adminPanel.login();
    });

    describe('When branding is updated', () => {
        let brandingName;

        before(() => {
            brandingPage.load();
            brandingName = faker.random.words(3);
            brandingPage.updateName(brandingName);
        });

        it('Then confirmation message is displayed', () => 
            brandingPage.checkConfirmationMessageIsShown());
    });
});