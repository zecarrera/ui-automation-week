var adminPanel = require("../pageObjects/adminPanelPage");
var homePage = require("../pageObjects/homePage");
var messagesPage = require("../pageObjects/messagesPage");

describe('Given admin user is logged in', () => {
    before(() => {
        homePage.load();
        homePage.clickAdminPanelLink();
        adminPanel.login();
    });

    describe('When admin navigates to messages page', () => {
        before(() => 
            messagesPage.loadMessages());
        
        it('Then unread messages are bolded', 
            () => messagesPage.checkUnreadMessagesAreBolded());
    });

});