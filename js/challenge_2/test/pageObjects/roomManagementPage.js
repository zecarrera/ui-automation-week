const roomNumberInput = "#roomNumber";
const roomPriceInput = "#roomPrice";
const createRoomButton = "#createRoom";
const roomNumberTableData = roomNumber => `#roomNumber${roomNumber}`;

const createRoom = (roomNumber, roomPrice) => {
    $(roomNumberInput).scrollIntoView();
    $(roomNumberInput).setValue(roomNumber);
    $(roomPriceInput).setValue(roomPrice);

    $(createRoomButton).click();

};

const checkRoomIsListed = roomNumber => {
    $(roomNumberTableData(roomNumber)).waitForDisplayed();
    expect($(roomNumberTableData(roomNumber)).isDisplayed()).toBe(true);
};

module.exports = {
    checkRoomIsListed,
    createRoom
}