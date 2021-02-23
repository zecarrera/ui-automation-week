var adminPanel = require("../pageObjects/adminPanelPage");
var homePage = require("../pageObjects/homePage");

describe('Given home page is loaded', () => {
    before(() => {
        homePage.load();
    });

    describe('When admin enters correct login details', () => {
        before(() => {
            homePage.clickAdminPanelLink();
            adminPanel.login();
        });

        it('Then logout link is available', () => adminPanel.checksUserLoggedIn());

        it('Then admin options are available', () => adminPanel.checksAdminOptionsAreVisible());        
    });

});