
const adminPanel = require("../pageObjects/adminPanelPage");
const homePage = require("../pageObjects/homePage");
const roomManagementPage = require("../pageObjects/roomManagementPage");
const faker = require('faker');
const MAX_ROOM_NUMBER = 999;

describe('Given admin user is logged in', () => {
    before(() => {
        homePage.load();
        homePage.clickAdminPanelLink();
        adminPanel.login();
    });

    describe('When a new room is created', () => {
        let roomNumber;

        before(() => {
            roomNumber = faker.random.number(MAX_ROOM_NUMBER).toString();
            roomManagementPage.createRoom(roomNumber, '100');
        });

        it('Then submitted room is shown in the list', () => 
            roomManagementPage.checkRoomIsListed(roomNumber));
    });
});