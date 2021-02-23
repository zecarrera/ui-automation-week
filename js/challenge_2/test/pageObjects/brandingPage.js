const brandingNameInput = "#name";
const updateBrandingButton = "#updateBranding";
const confirmationModal = ".ReactModalPortal";
const confirmationModalMessageLocator = "//p[text()=\"Branding updated!\"]";
const confirmationModalCloseButton = "//button[text()=\"Close\"]";

const load = () => browser.url('/#/admin/branding');
const updateName = brandingName => {
    $(brandingNameInput).waitForDisplayed();
    $(brandingNameInput).setValue(brandingName);

    $(updateBrandingButton).click();
};

const checkConfirmationMessageIsShown = () => {
    $(confirmationModal).waitForDisplayed();
    expect($(confirmationModalMessageLocator).isDisplayed()).toBe(true);

    $(confirmationModalCloseButton).click();
};

module.exports = {
    checkConfirmationMessageIsShown,
    load,
    updateName
}