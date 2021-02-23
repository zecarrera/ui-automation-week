const adminPanelLink = '//a[text()="Admin panel"]';
const contactFormDiv = "div.contact";
const contactForm = {
    name: '#name',
    email: '#email',
    phone: '#phone',
    subject: '#subject',
    message: '#description'
};
const submitContactButton = "#submitContact";

const load = () =>  browser.url('/');

const clickAdminPanelLink = () => $(adminPanelLink).click();

const submitContactForm = message => {
    $(contactForm.name).setValue(message.name);
    $(contactForm.email).setValue(message.email);
    $(contactForm.phone).setValue(message.phone);
    $(contactForm.subject).setValue(message.subject);
    $(contactForm.message).setValue(message.message);

    $(submitContactButton).click();
};

const checkContactFormSuccessMessage = () => {
    $(contactForm.name).waitForDisplayed({reverse:true});
    expect($(contactFormDiv).getText()).toContain('Thanks for getting in touch');
}

module.exports = {
    checkContactFormSuccessMessage,
    clickAdminPanelLink,
    load,
    submitContactForm
};
