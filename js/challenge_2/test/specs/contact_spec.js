
const homePage = require("../pageObjects/homePage");
const faker = require('faker');

describe('Given home page is loaded', () => {
    before(() => {
        homePage.load();
    });

    describe('When user submits contact form', () => {
        before(() => {
            let message = {
                name: faker.name.firstName(),
                email: faker.internet.email(),
                phone: faker.phone.phoneNumber(),
                subject: faker.random.words(2),
                message: faker.lorem.sentences(2)
            };
            homePage.submitContactForm(message);
        });

        it('Then success message is shown', () => homePage.checkContactFormSuccessMessage());

    });

});