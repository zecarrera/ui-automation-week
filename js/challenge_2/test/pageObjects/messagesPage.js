const unreadMessageRows = 'div.read-false';

const loadMessages = () => browser.url('/#/admin/messages');

const checkUnreadMessagesAreBolded = () => {
    if ($(unreadMessageRows).isDisplayed()){
        expect($$(unreadMessageRows).length).toBeGreaterThanOrEqual(1);
    }
};

module.exports = {
    checkUnreadMessagesAreBolded,
    loadMessages
}